import { Component } from '@angular/core';
import { Navbar } from "../components/navbar/navbar";
import { Hero } from "../layouts/hero/hero";
import { Features } from "../layouts/features/features";
import { Testimonials } from "../layouts/testimonials/testimonials";
import { Footer } from "../layouts/footer/footer";

@Component({
  imports: [Navbar, Hero, Features, Testimonials, Footer],
  selector: 'app-landing',
  styleUrl: './landing.css',
  templateUrl: './landing.html',
})
export class Landing {
}
