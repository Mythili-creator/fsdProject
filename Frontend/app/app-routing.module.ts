import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserLoginComponent } from './site/user-login/user-login.component';
import { ImportExcelComponent } from './admin/import-excel/import-excel.component';
import { UserSignupComponent } from './site/user-signup/user-signup.component';
import { ManageCompaniesComponent } from './admin/manage-companies/manage-companies.component';
import { CompanyEditComponent } from './admin/company-edit/company-edit.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { IpoListComponent } from './user/ipo-list/ipo-list.component';
import { CompareSecComponent } from './user/compare-sec/compare-sec.component';
import { CompareComComponent } from './user/compare-com/compare-com.component';
import { UpdateComponent } from './user/update/update.component';
import { HelpComponent } from './user/help/help.component';
import { ManageStockExchangesComponent } from './admin/manage-stock-exchanges/manage-stock-exchanges.component';
import { StockEditComponent } from './admin/stock-edit/stock-edit.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AddCompanyComponent } from './admin/add-company/add-company.component';
import { AddStockComponent } from './admin/add-stock/add-stock.component';
const routes: Routes = [

  { path: "login", component: UserLoginComponent },
  { path: "import-excel", component: ImportExcelComponent },
  { path: "signup", component: UserSignupComponent },
  { path: "", component: UserLoginComponent },
  { path: "manage-company", component: ManageCompaniesComponent },
  { path: "manage-stock-exchange", component: ManageStockExchangesComponent },
  { path: "company-edit/:id", component: CompanyEditComponent },
  { path: "stock-edit/:id", component: StockEditComponent },
  { path: "ipo-list", component: IpoListComponent },
  { path: 'user-home', component: UserHomeComponent },
  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'add-company', component: AddCompanyComponent },
  { path: 'add-stock', component: AddStockComponent },
  { path: 'compare-company', component: CompareComComponent },
  { path: "compare-sector", component: CompareSecComponent },
  { path: "update-profile", component:  UpdateComponent },
  { path: "help", component: HelpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
