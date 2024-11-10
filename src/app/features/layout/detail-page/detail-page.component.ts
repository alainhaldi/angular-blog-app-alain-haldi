import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogEntry, DataService } from '../../../data.service';
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
  blogID: number | undefined;
  blog$!: Observable<BlogEntry>; 

  // dummyBlog: BlogEntry = {
  //           id: 265,
  //           title: 'Quarkus: With nothing you are more productive!',
  //           likedByMe: false,
  //           author: 'alice',
  //           headerImageUrl: "https://picsum.photos/id/320/800/200",
  //           likes: 1,
  //           comments: 0,
  //           createdAt: '',
  //           contentPreview: 'This is a dummy text'
  // };
  // blog$: Observable<any> | undefined; // Observable für Blog-Daten

  constructor(
    // private route: ActivatedRoute,
    private dataService: DataService 
  ) {}

  ngOnInit(): void {
    
    this.blog$ = this.dataService.getBlogById(265);
    console.log(`Recieved: ${this.blog$}`)

    // console.log('~~~~~~~~~~~~~~~')
    // this.route.paramMap.subscribe(params => {
    //   this.blogID = Number(params.get('id'));
    //   // this.currentBlog = this.dataService.loadBlogByID(265);
    //   const id = +this.route.snapshot.paramMap.get('id')!; // Holt die Blog-ID aus der URL
    //   this.blog$ = this.dataService.getBlogById(id); 
    //   console.log(this.blog$)// HTTP-Request an den Service
    //   // this.loadBlogContent(this.blogId);
    // });
  }

  loadBlogContent(id: number): void {
    // this.currentBlog = this.dataService.
    // this.blogContent = this.dataService.getBlogById(id); // Beispielhafte Funktion
    // this.title = this.dataService.get
  }
}
