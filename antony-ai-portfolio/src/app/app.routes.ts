import { Routes } from '@angular/router';
import { ShellComponent } from './layout/shell/shell.component';

export const routes: Routes = [
    {
        path: '',
        component: ShellComponent,
        children: [

            {
                path: '',
                loadComponent: () =>
                    import('./features/home/home.component')
                        .then(m => m.HomeComponent)
            },
            {
                path: 'blog',
                loadComponent: () =>
                    import('./features/blog/blog-list/blog-list.component')
                        .then(m => m.BlogListComponent)
            },
            {
                path: 'blog/:slug',
                loadComponent: () =>
                    import('./features/blog/blog-detail/blog-detail.component')
                        .then(m => m.BlogDetailComponent)
            }
        ]
    },

    {
        path: '**',
        redirectTo: ''
    }
];