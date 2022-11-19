import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  art_form = [
    {
      id:1, name:'Bharatnatyam', type:'Dance Form', description:'Bharatanatyam is one of Indias most prominent and extensively performed classical dance genres. Bharatanatyam is a preeminent Indian classical dance style that is recognized as the mother of many other Indian classical dance forms.',
      image:'../../assets/bharatnatyam.ppm'
      
    },
    {
      id:2, name:'Kathak', type:'Dance Form', description:'Kathak is a prominent ancient Indian classical dance and is thought to have started from the wandering bards of North India known as Kathakars.',
      image:'../../assets/HomePageImg1.webp'
    },
    {
      id:3, name:'Singing', type:'Singing', description:'Singing means making music with the voice. Singing is probably the way that music started many thousands of years ago. When people sing they make their voices go high or low. If they do this in a way that uses notes of a scale then they make tunes, called songs. A song, very broadly, is a musical piece, produced by the voice with distinct and fixed pitches and patterns of sound and silence and a variety which often includes repetition.',
      image:'../../assets/singing.jpg'
    },
    {
      id:4, name:'Dancing', type:'Dance Form', description:'Dance is a performing art. It is described in many ways. It is when people move to a musical rhythm, like a drum beat. They may be alone, or in a group. The dance may be an informal play, a part of a ritual, or a part of a professional performance. There are many kinds of dances, and every human society has its own dances.',
      image:'../../assets/dancing.jfif'
    },
    {
      id:5, name:'Sculpture', type:'Sclpturing', description:'sculpture, an artistic form in which hard or plastic materials are worked into three-dimensional art objects. The designs may be embodied in freestanding objects, in reliefs on surfaces, or in environments ranging from tableaux to contexts that envelop the spectator. An enormous variety of media may be used, including clay, wax, stone, metal, fabric, glass, wood, plaster, rubber, and random found objects. Materials may be carved, modeled, molded, cast, wrought, welded, sewn, assembled, or otherwise shaped and combined.',
      image:'../../assets/sculupture.jpg'
    },
    {
      id:6, name:'Painting Art', type:'Painting', description:'Painting is defined as the  of applying paint, or another medium, to a solid surface – usually a canvas. Paints or other forms of color are commonly applied to using a paintbrush. However, artists do use different tools such as sponges, spray paint, or even knives. In the art world, the term painting is used to both the act of painting and the resulting artwork created by the action. An artist can both be painting as action and create an object known as a painting.',
      image:'../../assets/pant.webp'
    },
    // {
    //   id:7, name:'Drawing Art', type:'Drawing', description:'Drawing as formal artistic creation might be defined as the primarily linear rendition of objects in the visible world, as well as of concepts, thoughts, attitudes, emotions, and fantasies given visual form, of symbols and even of abstract forms. This definition, however, applies to all graphic arts and techniques that are characterized by an emphasis on form or shape rather than mass and colour, as in painting. Drawing as such differs from graphic printing processes in that a direct relationship exists between production and result. Drawing, in short, is the end product of a successive effort applied directly to the carrier.',
    //   image:'../../../assets/Drawing.webp'
    // },
    // {
    //   id:8, name:'Theater', type:'Drama', description:'theatre, also spelled theater, in dramatic arts, an art concerned almost exclusively with live performances in which the action is precisely planned to create a coherent and significant sense of drama.', 
    //   image:'../../../assets/Theater.jpg'
    // },
    // {
    //   id:9, name:'Something Else', type:'Else', description:'India has its own identity of rich cultural diversity and is well reflected in the charm of its enchanting folk arts and crafts. Marvellous painting styles are prevalent across various regions, representing the tradition, customs, and beliefs expressed from one generation to another. Most of the Indian painting styles existed as cloth paintings, wall paintings, or murals and with the passing of time; urban sprawl transformed these art forms on canvas, paper, etc. Indian painting styles are not just a contemplation of the primeval lifestyle but a perfect example of artistic expression through simple yet distinct compositions. Below are some of the most popular Indian folk painting styles.',
    //   image:'../../../assets/SomethingElse.jfif'
    // }
  ]
  
  
  getTotalForms(){
    return this.art_form.length;
  }

  getTotalFreeCourses(){
    return this.art_form.filter(content => content.type === 'Dance').length;
  }

  getTotalPremiumCourses(){
    return this.art_form.filter(art_form => art_form.type === 'Sing').length;
  }
  
  courseCountRadioButton: string = 'All';
  serachText: string = '';

  onFilterRadioButtonChanged(data: string){
    this.courseCountRadioButton = data;
    console.log(this.courseCountRadioButton);
  }

  onSearchTextEntered(searchValue: string){
    this.serachText = searchValue;
    console.log(this.serachText);
    
  }
}



