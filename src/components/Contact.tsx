import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Instagram, Linkedin, Send, MessageSquare, Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-primary">
        Connect With Me
      </h2>
      
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" className="gap-2">
            <Linkedin className="text-[#0077B5]" /> LinkedIn
          </Button>
          <Button variant="outline" className="gap-2">
            <Instagram className="text-[#E4405F]" /> Instagram
          </Button>
          <Button variant="outline" className="gap-2">
            <Facebook className="text-[#1877F2]" /> Facebook
          </Button>
          <Button variant="outline" className="gap-2">
            <MessageSquare className="text-[#0088cc]" /> Telegram
          </Button>
          <Button variant="outline" className="gap-2">
            <Mail /> nikunj.thesiya.js@gmail.com
          </Button>
        </div>

        <Card className="glass-card max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Contact Me</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Full Name *" />
                <Input type="email" placeholder="Email *" />
                <Input placeholder="Mobile No." />
                <Input placeholder="Subject *" />
              </div>
              <Textarea placeholder="Message *" className="min-h-[120px]" />
              <Button type="submit" className="gap-2">
                Send <Send className="w-4 h-4" />
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="flex justify-center gap-4 pt-8">
          <img src="/lovable-uploads/91f75716-1091-4119-bd3f-b087f0f13fc0.png" alt="Portfolio Made with" className="h-12" />
        </div>
      </div>
    </section>
  );
};