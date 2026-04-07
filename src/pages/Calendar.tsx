import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { format } from "date-fns";
import { CalendarIcon, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM",
];

const practiceAreas = [
  "Real Estate Law",
  "Family Law",
  "Estate Planning",
  "Business Law",
  "Criminal Defense",
  "Personal Injury",
];

const Calendar_Page = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    practiceArea: "",
    message: "",
  });

  const handleSubmit = async () => {
    if (!date || !selectedTime || !form.fullName || !form.email) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("contact_submissions").insert({
      full_name: form.fullName,
      email: form.email,
      phone: form.phone || null,
      practice_area: form.practiceArea || null,
      message: `Appointment request for ${format(date, "PPP")} at ${selectedTime}. ${form.message}`,
    });
    setSubmitting(false);
    if (error) {
      toast.error("Something went wrong. Please try again.");
    } else {
      toast.success("Consultation request submitted! We'll confirm your appointment shortly.");
      setForm({ fullName: "", email: "", phone: "", practiceArea: "", message: "" });
      setDate(undefined);
      setSelectedTime("");
      setDialogOpen(false);
    }
  };

  const isPastDate = (d: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return d < today;
  };

  const isWeekend = (d: Date) => d.getDay() === 0 || d.getDay() === 6;

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="font-heading text-2xl font-bold text-primary-foreground tracking-wide">
            1000 Island <span className="text-[hsl(var(--gold))]">Law</span>
          </Link>
          <Link to="/">
            <Button variant="outline" size="sm" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-3">Schedule a Consultation</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Select a date and time that works for you. We'll confirm your appointment within one business day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <CalendarIcon className="w-5 h-5 text-[hsl(var(--gold))]" /> Select a Date
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(d) => isPastDate(d) || isWeekend(d)}
                className="pointer-events-auto"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Clock className="w-5 h-5 text-[hsl(var(--gold))]" /> Select a Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              {date ? (
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTime(time)}
                      className="text-sm"
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-sm text-center py-8">
                  Please select a date first.
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        {date && selectedTime && (
          <div className="mt-8 text-center">
            <p className="text-foreground mb-4">
              <span className="font-semibold">{format(date, "EEEE, MMMM d, yyyy")}</span> at{" "}
              <span className="font-semibold">{selectedTime}</span>
            </p>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-[hsl(var(--gold))] text-accent-foreground hover:bg-[hsl(var(--gold-light))]">
                  Book This Time
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="font-heading">Your Information</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 mt-2">
                  <Input placeholder="Full Name *" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} />
                  <Input placeholder="Email *" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  <Input placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  <Select value={form.practiceArea} onValueChange={(v) => setForm({ ...form, practiceArea: v })}>
                    <SelectTrigger><SelectValue placeholder="Practice Area" /></SelectTrigger>
                    <SelectContent>
                      {practiceAreas.map((a) => <SelectItem key={a} value={a}>{a}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  <Textarea placeholder="Brief description of your legal matter" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  <Button onClick={handleSubmit} disabled={submitting} className="w-full bg-[hsl(var(--gold))] text-accent-foreground hover:bg-[hsl(var(--gold-light))]">
                    {submitting ? "Submitting..." : "Request Consultation"}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        )}
      </main>
    </div>
  );
};

export default Calendar_Page;
