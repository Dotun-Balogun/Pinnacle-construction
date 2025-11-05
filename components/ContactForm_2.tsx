import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function ContactForm_2() {
  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm text-gray-600">
              Your Name (*)
            </Label>
            <Input
              id="name"
              type="text"
              className="w-full"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm text-gray-600">
              Your Email (*)
            </Label>
            <Input
              id="email"
              type="email"
              className="w-full"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject" className="text-sm text-gray-600">
            Subject
          </Label>
          <Input
            id="subject"
            type="text"
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="department" className="text-sm text-gray-600">
            Department
          </Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Business Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="business">Business Department</SelectItem>
              <SelectItem value="sales">Sales Department</SelectItem>
              <SelectItem value="support">Support Department</SelectItem>
              <SelectItem value="hr">HR Department</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="question" className="text-sm text-gray-600">
            Your Question
          </Label>
          <Textarea
            id="question"
            className="w-full min-h-[120px] resize-none"
          />
        </div>

        <Button 
          type="submit" 
          className="bg-slate-800 hover:bg-slate-700 text-white px-8"
        >
          Ask
        </Button>
      </form>
    </div>
  );
}