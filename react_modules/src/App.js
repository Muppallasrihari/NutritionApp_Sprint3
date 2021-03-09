import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from  'react-router-dom';
import HeaderComponent from './components/Layout/HeaderComponents';
import {Provider} from 'react-redux';
import Dashboard from './components/Dashboard';
import AddCustomer from './components/Customer/AddCustomer';
import AddDietPlan from './components/DietPlan/AddDietPlan';
import AddPayment from './components/Payment/AddPayment';
import getPayment from './components/Payment/getPayment';
import store from './store';
import AddNutritionPlan from './components/NutritionPlan/AddNutritionPlan';
import SignIn from './components/SignIn';
import Admin from './components/Admin';
import AdminDashBoard from './components/AdminDashBoard';
import FooterComponent from './components/Layout/FooterComponent';
import UpdateCustomer from './components/Customer/UpdateCustomer';
import test from './test';
import homePage from './homePage';
import logOut from './logOut';
import NewTest from './components/Customer/NewTest';
import New1 from './components/Customer/New1';
import CustomerItem from './components/CustomerItem';
import custInfo from './custInfo';
import NutritionPlans from './components/NutritionPlan/NutritionPlans';
import ExerciseStatic from './components/Exercise/ExerciseStatic';

import OtpPage from './components/Payment/OtpPage';
import ProceedPage from './components/Payment/ProceedPage';
import CalculateBMI from './components/CalculateBMI';
import Creditcard from './components/Payment/Creditcard';
import NutritionDashboard from './components/NutritionPlan/NutritionDashboard';
import UpdateNutritionPlan from './components/NutritionPlan/UpdateNutritionPlan';
import WeightLogDashboard from './components/WeightLog/WeightLogDashboard';
import AddWeightLog from './components/WeightLog/AddWeightLog';
import UpdateWeightLog from './components/WeightLog/UpdateWeightLog';
import AddCaloriesLog from './components/CaloriesLog/AddCaloriesLog';
import UpdateCaloriesLog from './components/CaloriesLog/UpdateCaloriesLog';
import CaloriesDashboard from './components/CaloriesLog/CaloriesDashboard';
import UpdateDietPlan from './components/DietPlan/UpdateDietPlan';
import DietDashboard from './components/DietPlan/DietDashboard';
import DietPlanInfo from './components/DietPlan/DietPlan-Info'
import ExerciseDashboard from './components/Exercise/ExerciseDashboard';
import AddExerciseForm from './components/Exercise/AddExerciseForm';
import UpdateExerciseFormNoF from './components/Exercise/UpdateExerciseFormNoF';

import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module

function App() {
  return (
   <Provider store={store}> 
<Router>
<div className="imag"> 
        <HeaderComponent/>
        <Route path="/app1" component={NewTest}/>
        <Route path="/bmi" component={CalculateBMI}/>
        <Route path="/app2" component={New1}/>
        <Route path="/custInfo" component={custInfo}/>
        <Route path="/nutriplans/" component={NutritionPlans}/>
        <Route path="/nutridash/" component={NutritionDashboard}/>
        <Route path="/updateNutritionPlan/:id/" component={UpdateNutritionPlan}/>
        <Route path="/dietplans/" component={DietPlanInfo}/>
        <Route path="/explans/" component={ExerciseStatic}/>
        <Route path="/sign" component={test}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/home" component={homePage}/>
        <Route path="/logOut" component={logOut}/>
        <Route path="/SignIn" component={SignIn}/>
        <Route path="/Admin" component={Admin}/>
        <Route path="/admindashboard" component={AdminDashBoard}/>
        <Route path="/addcustomer" component={AddCustomer}/>

        <Route path="/adddietplan" component={AddDietPlan}/>
        <Route path="/updatedietplan/:id" component={UpdateDietPlan}/>
        <Route path="/dietplandashboard" component={DietDashboard}/>

        <Route path="/addnutrition" component={AddNutritionPlan}/>
        <Route path="/credit" component={Creditcard}/>
        <Route path="/payment/:paymentIdentifier" component={AddPayment}/>
        <Route path="/getallpayments" component={getPayment}/>
        <Route path="/otppage" component={OtpPage}/>
        <Route path="/proceed" component={ProceedPage}/>
        <Route path="/cus1" component={CustomerItem}/>
        <Route path="/updateCustomer/:id" component={UpdateCustomer}/>
         <Route path="/weightLogDashboard" component={WeightLogDashboard}/>
          <Route path="/addWeightLog" component={AddWeightLog}/>
        <Route path="/updateWeightLog/:id" component={UpdateWeightLog}/>
  
             <Route path="/addCaloriesLog" component={AddCaloriesLog}/>
             <Route path="/updateCaloriesLog/:id" component={UpdateCaloriesLog}/>
             <Route path="/caloriesdashboard" component={CaloriesDashboard}/>

      <Route path="/exercisedashboard" component={ExerciseDashboard}/>
      <Route path="/addExercise" component={AddExerciseForm}/>

      <Route path="/updateExercise/:id" component={UpdateExerciseFormNoF}/>
      



      </div>
  </Router>
  <FooterComponent></FooterComponent>
  </Provider>
  );
}

export default App;
