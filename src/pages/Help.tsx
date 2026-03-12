import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Book, Mail, ArrowLeft, Search, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const faqs = [
  {
    q: "How do I connect Google Sheets?",
    a: "Go to Dashboard → Integrations, paste your spreadsheet URL and give it a name. QuickCRM will automatically sync the data.",
  },
  {
    q: "How do I connect HubSpot?",
    a: "Navigate to Dashboard → Integrations and click 'Connect' on the HubSpot section. You'll be redirected to authorize access to your HubSpot account.",
  },
  {
    q: "What CRM objects are supported from HubSpot?",
    a: "We currently support Contacts, Companies, Deals, and Tickets. More objects will be added based on user feedback.",
  },
  {
    q: "How is token usage calculated?",
    a: "Each sync operation consumes tokens based on the number of records processed. You can monitor your usage in the Dashboard analytics section.",
  },
  {
    q: "Can I upgrade or downgrade my plan?",
    a: "Yes, visit Dashboard → Billing to change your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    q: "Is my data secure?",
    a: "Absolutely. All data is encrypted in transit and at rest. We never store your raw CRM data — only sync metadata.",
  },
];

const guides = [
  { title: "Getting Started", desc: "Set up your first integration in under 5 minutes." },
  { title: "Managing Sheets", desc: "Add, edit, and remove Google Sheets connections." },
  { title: "HubSpot Sync", desc: "Configure object syncing and field mapping." },
  { title: "Billing & Tokens", desc: "Understand your usage and manage your subscription." },
];

const Help = () => {
  const [search, setSearch] = useState("");
  const [contactForm, setContactForm] = useState({ subject: "", message: "" });

  const filteredFaqs = faqs.filter(
    (f) =>
      f.q.toLowerCase().includes(search.toLowerCase()) ||
      f.a.toLowerCase().includes(search.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setContactForm({ subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link to="/dashboard">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-xl font-semibold text-foreground">Help Center</h1>
            <p className="text-sm text-muted-foreground">Find answers and get support</p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10 space-y-12">
        {/* Search */}
        <div className="relative max-w-lg mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search help articles…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Quick Links */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {guides.map((g) => (
            <Card key={g.title} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-2">
                <Book className="h-5 w-5 text-accent mb-1" />
                <CardTitle className="text-sm">{g.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">{g.desc}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-4">Frequently Asked Questions</h2>
          {filteredFaqs.length === 0 ? (
            <p className="text-sm text-muted-foreground">No results found. Try a different search or contact us below.</p>
          ) : (
            <Accordion type="single" collapsible className="border rounded-lg">
              {filteredFaqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="px-4 text-sm text-left">{f.q}</AccordionTrigger>
                  <AccordionContent className="px-4 text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </section>

        {/* Contact */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <Mail className="h-5 w-5 text-accent mb-1" />
              <CardTitle className="text-base">Contact Support</CardTitle>
              <CardDescription>We typically respond within 24 hours.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Subject"
                  value={contactForm.subject}
                  onChange={(e) => setContactForm((p) => ({ ...p, subject: e.target.value }))}
                  required
                />
                <Textarea
                  placeholder="Describe your issue…"
                  value={contactForm.message}
                  onChange={(e) => setContactForm((p) => ({ ...p, message: e.target.value }))}
                  required
                  rows={4}
                />
                <Button type="submit" size="sm">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <MessageCircle className="h-5 w-5 text-accent mb-1" />
              <CardTitle className="text-base">Other Resources</CardTitle>
              <CardDescription>More ways to get help.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <a href="mailto:hello@quickcrm.io" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4" /> hello@quickcrm.io
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ExternalLink className="h-4 w-4" /> API Documentation
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ExternalLink className="h-4 w-4" /> Status Page
              </a>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Help;
