import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogEntry, DataService } from '../../../services/data-service/data.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.scss'
})
export class DetailPageComponent implements OnInit{
  // blogId!: string;
  // blog$!: Observable<BlogEntry>; 

  // constructor(
  //   private route: ActivatedRoute,
  //   private dataService: DataService 
  // ) {}

  // ngOnInit(): void {
  //   // Get ID from pathurl
  //   this.blogId = this.route.snapshot.paramMap.get('id') ?? '265'; // If NULL then default value
  
  //   // get blog
  //   this.blog$ = this.dataService.getBlogById(this.blogId);
  //   console.log(`Recieved: ${this.blog$}`)
  // }

  blogId!: string;

  constructor(private dataService: DataService,private route: ActivatedRoute,) {}

  ngOnInit(): void {
    // Get ID from pathurl
    this.blogId = this.route.snapshot.paramMap.get('id') ?? '264'; // If NULL then default value
    this.dataService.getBlogById(this.blogId);
    console.log(`Recieved: ${this.blogId}`)
  }

  // Getter to access the signal value directly
  get blog() {
    return this.dataService._blog();
  }
}
