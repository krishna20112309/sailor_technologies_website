import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

//   ngAfterViewInit() {
//   const counters = document.querySelectorAll('.count');
//   counters.forEach(counter => {
//     const target = +counter.textContent!;
//     let count = 0;

//     const update = () => {
//       if (count < target) {
//         count += Math.ceil(target / 200);
//         counter.textContent = Math.min(count, target).toString();
//         requestAnimationFrame(update);
//       }
//     };

//     update();
//   });
// }
@ViewChild('carousel', { static: false })
  carousel!: ElementRef<HTMLDivElement>;

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({
      left: -320,
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({
      left: 320,
      behavior: 'smooth'
    });
  }


  activeTab = 'mobile';

  tabs = [
    { key: 'mobile', label: 'Mobile' },
    { key: 'frontend', label: 'Front End' },
    { key: 'backend', label: 'Backend' },
    { key: 'frameworks', label: 'Frameworks' },
    { key: 'cms', label: 'CMS' },
    { key: 'database', label: 'Database' },
    { key: 'devops', label: 'DevOps' },
    { key: 'ecommerce', label: 'Ecommerce' }
  ];

  technologies: any = {
    mobile: [
      { name: 'Android', icon: 'assets/tech/Android (2).webp' },
      { name: 'iOS', icon: 'assets/tech/Apple.webp' },
      { name: 'Swift', icon: 'assets/tech/Swift.webp' },
      { name: 'Ionic', icon: 'assets/tech/Ionic.webp' },
      { name: 'Flutter', icon: 'assets/tech/Flutter.webp' },
      { name: 'React Native', icon: 'assets/tech/React.webp' },
      { name: 'Xamarin', icon: 'assets/tech/Xamarin.webp' },
      { name: 'Kotlin', icon: 'assets/tech/Kotlin.webp' }
    ],

    frontend: [
      { name: 'React', icon: 'assets/tech/react.png' },
      { name: 'Vue', icon: 'assets/tech/vue.png' },
      { name: 'JavaScript', icon: 'assets/tech/javascript.png' },
      { name: 'Svelte', icon: 'assets/tech/svelte.png' },
      { name: 'Nuxt', icon: 'assets/tech/nuxt.png' },
      { name: 'Gatsby', icon: 'assets/tech/gatsby.png' },
      { name: 'Ember', icon: 'assets/tech/ember.png' },
      { name: 'Meteor', icon: 'assets/tech/meteor.png' }
    ],

    backend: [
      { name: 'Python', icon: 'assets/tech/python.png' },
      { name: 'PHP', icon: 'assets/tech/php.png' },
      { name: 'Node.js', icon: 'assets/tech/node.png' },
      { name: 'Java', icon: 'assets/tech/java.png' },
      { name: 'Fastify', icon: 'assets/tech/fastify.png' },
      { name: 'Express', icon: 'assets/tech/express.png' },
      { name: '.NET', icon: 'assets/tech/dotnet.png' },
      { name: 'ASP.NET', icon: 'assets/tech/aspnet.png' }
    ]
  };

  setTab(tab: string) {
    this.activeTab = tab;
  }

  steps = [
  {
    id: 1,
    title: 'Define the scope of work',
    description:
      'Specify your requirements and based on them, we select specialists in specific fields.',
    points: [
      'Branding and Motion Design',
      'Product Design',
      'Web Development'
    ]
  },
  {
    id: 2,
    title: 'Project time and cost estimation',
    description:
      'We analyze scope and choose the most effective engagement model.',
    points: [
      'Fixed Price',
      'Time & Materials'
    ]
  },
  {
    id: 3,
    title: 'Interview and first kick-off meeting',
    description:
      'You will meet specialists and your Account Manager to align goals.',
    points: [
      'Prepare agenda',
      'Discuss goals',
      'Follow-up notes'
    ]
  },
  {
    id: 4,
    title: 'Ready? Let’s start!',
    description:
      'After setting a start date, we are ready to take on new challenges and deliver continuously.',
    points: []
  }
];

}

