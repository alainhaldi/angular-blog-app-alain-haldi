// import { BlogEntry, DataService } from './data.service';
// import { HttpClient } from '@angular/common/http';
// import { of } from 'rxjs';

// describe('DataService', () => {
//   let service: DataService;
//   let httpClientMock: jasmine.SpyObj<HttpClient>;

//   beforeEach(() => {
//     httpClientMock = jasmine.createSpyObj('HttpClient', ['get']);
//     service = new DataService(httpClientMock);
//   });

//   // Test loadBlogByID
//   it('should load a blog by ID', () => {
//     let dummyBlog: BlogEntry = {
//         id: 265,
//         title: 'Quarkus: With nothing you are more productive!',
//         likedByMe: false,
//         author: 'alice',
//         headerImageUrl: "https://picsum.photos/id/320/800/200",
//         likes: 1,
//         comments: 0,
//         createdAt: '',
//         contentPreview: ''
//     };
//     const blogID = 265;

//     // Mock the HTTP GET request
//     httpClientMock.get.and.returnValue(of({ data: dummyBlog }));

//     service.loadBlogByID(blogID);

//     expect(httpClientMock.get).toHaveBeenCalledWith(`${service.apiUrl}/entries/${blogID}`);
//     expect(service.currentBlog?.id).toEqual(dummyBlog.id);
//     expect(service.currentBlog?.title).toEqual(dummyBlog.title);
//     expect(service.currentBlog?.author).toEqual(dummyBlog.author);
//   });
// });