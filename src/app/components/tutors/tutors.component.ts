import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tutor } from 'src/app/models/tutor';
import { TutorServiceService } from 'src/app/services/tutor-service.service';

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.css']
})
export class TutorsComponent implements OnInit {

  @Input() itemInput: string;

  @Output() itemOutput: EventEmitter<string> = new EventEmitter<string>();

  private tutorList: Tutor[] = [];

  constructor(private tutorService: TutorServiceService) { }

  ngOnInit(): void {
    this.tutorService.getAllTutors()
    .subscribe( tutors => {
        this.tutorList = tutors;
    });
  }

  tellMyRealName(value: string) {
    this.itemOutput.emit(value);
  }

}


