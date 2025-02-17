import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { META_INFO } from '../meta-config';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  constructor(private title: Title, private meta: Meta) { }

  updateMeta(route: string) {
    if (Object.prototype.hasOwnProperty.call(META_INFO, route)) {
      const { title, description, keywords } = META_INFO[route];
      this.updateTitle(title);
      this.updateDescription(description);
      this.updateKeywords(keywords);
    }
  }

  updateTitle(title: string) {
    if (title) {
      this.title.setTitle(title);
    }
  }

  updateDescription(description: string) {
    if (description) {
      this.meta.updateTag({ name: 'description', content: description });
    }
  }

  updateKeywords(keywords: string) {
    if (keywords) {
      this.meta.updateTag({ name: 'keywords', content: keywords });
    }
  }
}
