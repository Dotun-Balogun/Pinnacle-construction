import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  return (
    <section className=" p-8 rounded-md max-w-3xl mx-auto">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-black">
            Your Name (required)
          </label>
          <Input
            type="text"
            placeholder="Enter your name"
            className="bg-white text-black focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-black">
            Your Email (required)
          </label>
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-white text-black focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>

        {/* Subject */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-black">Subject</label>
          <Input
            type="text"
            placeholder="Enter subject"
            className="bg-white text-black focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>

        {/* Department */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-black">Department</label>
          <Select>
            <SelectTrigger className="bg-white text-black focus:ring-0 focus:ring-offset-0">
              <SelectValue placeholder="Select Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="business">Business Department</SelectItem>
              <SelectItem value="technical">Technical Department</SelectItem>
              <SelectItem value="support">Support Department</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Message */}
        <div className="md:col-span-2 flex flex-col space-y-2">
          <label className="text-sm font-medium text-black">Your Message</label>
          <Textarea
            placeholder="Type your message..."
            className="bg-white text-black h-32 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>

        {/* Submit */}
        <div className="md:col-span-2 flex justify-end">
          <Button className="bg-[#1E2A39] text-white hover:bg-[#16202C]">
            Send Message
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
