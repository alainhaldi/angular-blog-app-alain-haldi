import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogEntry, DataService } from '../../../data.service';

@Component({
  selector: 'app-detail-page',
  standalone: true,
  imports: [],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.scss'
})
export class DetailPageComponent implements OnInit{
  blogID: number | undefined;
  currentBlog: BlogEntry | undefined;

  dummyBlog: BlogEntry = {
            id: 265,
            title: 'Quarkus: With nothing you are more productive!',
            likedByMe: false,
            author: 'alice',
            headerImageUrl: "https://picsum.photos/id/320/800/200",
            likes: 1,
            comments: 0,
            createdAt: '',
            contentPreview: 'This is a dummy text'
  };

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService 
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.blogID = Number(params.get('id'));
      // this.currentBlog = this.dataService.loadBlogByID(265);

      // this.loadBlogContent(this.blogId);
    });
  }

  loadBlogContent(id: number): void {
    // this.currentBlog = this.dataService.
    // this.blogContent = this.dataService.getBlogById(id); // Beispielhafte Funktion
    // this.title = this.dataService.get
  }
}
