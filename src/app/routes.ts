import { Routes, RouterModule } from '@angular/router';

import { ArtistComponent } from './artist/artist.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ArtworksComponent } from './artworks/artworks.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            name: 'Home'
        }
    },
    {
        path: 'about',
        component: AboutComponent,
        data: {
            name: 'About'
        }
    },
    {
        path: 'artist',
        component: ArtistComponent,
        data: {
            name: 'Artist'
        }
    },
    {
        path: 'artworks',
        component: ArtworksComponent,
        data: {
            name: 'Artworks'
        }
    }
];

export const routerModule = RouterModule.forRoot(routes);