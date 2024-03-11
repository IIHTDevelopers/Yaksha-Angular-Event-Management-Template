import { Component } from '@angular/core';
import { Event } from '../../models/event.model';
import { Guest } from '../../models/guest.model';
import { Feedback } from '../../models/feedback.model';

@Component({
  selector: 'app-event-management',
  templateUrl: './event-management.component.html',
  styleUrls: ['./event-management.component.css']
})
export class EventManagementComponent {
  event: Event = { name: '', date: '', time: '', venue: '' };
  guests: Guest[] = [];
  feedbacks: Feedback[] = [];
  newGuest: Guest = { name: '', email: '', rsvpStatus: 'Maybe' };

  addGuest() {
    // write your logic here
  }

  addFeedback(guestEmail: string, comments: string) {
    // write your logic here
  }

  updateRSVP(email: string, status: 'Attending' | 'Not Attending' | 'Maybe') {
    // write your logic here
  }
}