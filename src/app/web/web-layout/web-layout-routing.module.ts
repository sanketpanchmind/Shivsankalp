import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoAuthGuardService } from 'src/app/core/auth/no-auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('../../web/home/home.module').then(m => m.HomeModule), data: { title: 'Home'} },
  // { path: 'discover-us', loadChildren: () => import('../../web/about-us/about-us.module').then(m => m.AboutUsModule), data: { title: 'Discover Us'} },
  // { path: 'contact-us', loadChildren: () => import('../../web/contact-us/contact-us.module').then(m => m.ContactUsModule), data: { title: 'contact-us'} },
  // { path: 'career', loadChildren: () => import('../../web/career/career.module').then(m => m.CareerModule), data: { title: 'career'} },
  // { path: 'career/job-details/:id', loadChildren: () => import('../../web/career/job-details/job-details.module').then(m => m.JobDetailsModule), data: { title: 'job-details'} },
  // { path: 'blogs', loadChildren: () => import('../../web/blogs/blogs.module').then(m => m.BlogsModule), data: { title: 'blogs'} },
  // { path: 'solutions', loadChildren: () => import('../../web/solutions/solutions.module').then(m => m.SolutionsModule), data: { title: 'solutions'} },
  // { path: 'solutions/automatic-milk-collection-unit', loadChildren: () => import('../../web/solutions/amcu/amcu.module').then(m => m.AmcuModule), data: { title: 'automatic-milk-collection-unit'} },
  // { path: 'solutions/kote-inventory-management-system', loadChildren: () => import('../../web/solutions/kims/kims.module').then(m => m.KimsModule), data: { title: 'kote-inventory-management-system'}  },
  // { path: 'solutions/election-management-system', loadChildren: () => import('../../web/solutions/election-mgmt-system/election-mgmt-system.module').then(m => m.ElectionMgmtSystemModule), data: { title: 'election-management-system'}  },
  // { path: 'solutions/mahakhanij-system', loadChildren: () => import('../../web/solutions/mahamining-system/mahamining-system.module').then(m => m.MahaminingSystemModule), data: { title: 'mahakhanij-system'} },
  // { path: 'solutions/dairy-vet-software', loadChildren: () => import('../../web/solutions/dairy-vet-software/dairy-vet-software.module').then(m => m.DairyVetSoftwareModule), data: { title: 'dairy-vet-software'} },
  // { path: 'projects/project-details/:id', loadChildren: () => import('../../web/projects/project-details/project-details.module').then(m => m.ProjectDetailsModule), data: { title: 'project-details'} },
  // { path: 'solutions/solution-details/:id', loadChildren: () => import('../../web/solutions/solution-details/solution-details.module').then(m => m.SolutionDetailsModule) },
  // { path: 'projects', loadChildren: () => import('../../web/projects/projects.module').then(m => m.ProjectsModule), data: { title: 'projects'} },
  // { path: 'services', loadChildren: () => import('../../web/services/services.module').then(m => m.ServicesModule), data: { title: 'services'}  },
  // { path: 'services/:id', loadChildren: () => import('../../web/services/services.module').then(m => m.ServicesModule), data: { title: 'services'}  },
  // { path: 'industries', loadChildren: () => import('../../web/industries/industries.module').then(m => m.IndustriesModule), data: { title: 'industries'}  },
  // { path: 'industry-details', loadChildren: () => import('../../web/industries/industry-details/industry-details.module').then(m => m.IndustryDetailsModule) },
  // { path: 'industries/defence', loadChildren: () => import('../../web/industries/defence/defence.module').then(m => m.DefenceModule), data: { title: 'defence'}  },
  // { path: 'industries/dairy', loadChildren: () => import('../../web/industries/dairy/dairy.module').then(m => m.DairyModule), data: { title: 'dairy'}  },
  // { path: 'dairy-procurement-erp', loadChildren: () => import('../../web/industries/dairy/dairy-procurement-erp/dairy-procurement-erp.module').then(m => m.DairyProcurementErpModule), data: { title: 'prodairy-procurement-erpjects'}  },
  // { path: 'industries/election', loadChildren: () => import('../../web/industries/election/election.module').then(m => m.ElectionModule), data: { title: 'election'}  },
  // { path: 'industries/mining', loadChildren: () => import('../../web/industries/mining/mining.module').then(m => m.MiningModule), data: { title: 'mining'}  },
  // { path: 'industries/vehicle-tracking', loadChildren: () => import('../../web/industries/vehicle-tracking/vehicle-tracking.module').then(m => m.VehicleTrackingModule), data: { title: 'vehicle-tracking'}  },
  // { path: 'industries/livestock', loadChildren: () => import('../../web/industries/livestock/livestock.module').then(m => m.LivestockModule), data: { title: 'livestock'}  },
  // { path: 'election-management-erp', loadChildren: () => import('../../web/industries/election/election-management-erp/election-management-erp.module').then(m => m.ElectionManagementErpModule), data: { title: 'election-management-erp'} },
  // { path: 'service-details', loadChildren: () => import('../../web/services/service-details/service-details.module').then(m => m.ServiceDetailsModule), data: { title: 'service-details'}  },
  // { path: 'achievements', loadChildren: () => import('../../web/achievements/achievements.module').then(m => m.AchievementsModule), data: { title: 'achievements'}  },
  // { path: 'csr', loadChildren: () => import('../../web/csr/csr.module').then(m => m.CsrModule), data: { title: 'csr'}  },
  // { path: 'gallery', loadChildren: () => import('../../web/gallery/gallery.module').then(m => m.GalleryModule), data: { title: 'gallery'} },
  // { path: 'industries/:id', loadChildren: () => import('../../web/industries/industries.module').then(m => m.IndustriesModule) },
  // { path: 'login', loadChildren: () => import('../../web/login/login.module').then(m => m.LoginModule) , canActivate: [NoAuthGuardService]},
  // { path: 'sitemap', loadChildren: () => import('../../web/sitemap/sitemap.module').then(m => m.SitemapModule), data: { title: 'sitemap'} },
  // { path: 'privacy-policy', loadChildren: () => import('../../web/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule), data: { title: 'privacy-policy'} },

  // { path: 'discoverus/clients', loadChildren: () => import('../../web/discoverus/clients/clients.module').then(m => m.ClientsModule), data: { title: 'clients'} },
  // { path: 'discoverus/gallery', loadChildren: () => import('../../web/discoverus/gallery/gallery.module').then(m => m.GalleryModule), data: { title: 'gallery'} },
  // { path: 'discoverus/about-us', loadChildren: () => import('../../web/discoverus/about-us/about-us.module').then(m => m.AboutUsModule), data: { title: 'about-us'} },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebLayoutRoutingModule { }
