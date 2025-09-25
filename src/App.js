import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './common.scss';
import './styles.scss';
import './plus.css';
import MyCare from './pages/my_care';
import MyCareAdd from './pages/my_care_add';
import UsageRecords from './pages/usage_records';
import UsageRecordsEmpty from './pages/usage_records_empty';
import CheckupEmpty from './pages/checkup_empty';
import CheckupEmptyConfirm from './pages/checkup_empty_confirm';
import EasyLogin from './pages/easy_login';
import EasyLoginKaKao from './pages/easy_login_kakao';
import UsageRecordsBottomsheet from './pages/usage_records_bottomsheet';
import BloodPressure from './pages/blood_pressure';
import PredictionKidneys from './pages/prediction_kidneys';
import CheckupResult from './pages/checkup_result';
import CheckupResult2 from './pages/checkup_result_2';
import CheckupResult3 from './pages/checkup_result_3';
import CheckupResult4 from './pages/checkup_result_4';
import CheckupResult5 from './pages/checkup_result_5';
import CheckupResult6 from './pages/checkup_result_6';
import CheckupResult7 from './pages/checkup_result_7';
import CheckupResult8 from './pages/checkup_result_8';
import CheckupResult9 from './pages/checkup_result_9';
import CheckupResult10 from './pages/checkup_result_10';
import CheckupLoading from './pages/checkup_loading';
import CheckupInput from './pages/checkup_input';
import CheckupInput2 from './pages/checkup_input_2';
import CheckupInput3 from './pages/checkup_input_3';
import CheckupInput4 from './pages/checkup_input_4';
import CheckupInput5 from './pages/checkup_input_5';
import CheckupInput6 from './pages/checkup_input_6';
import CheckupInput7 from './pages/checkup_input_7';
import CheckupInput8 from './pages/checkup_input_8';
import CheckupInput9 from './pages/checkup_input_9';
import CheckupInput10 from './pages/checkup_input_10';
import Popup from './pages/popup';
import BottomSheetUnitSelect from './pages/bottom_sheet_unit_select';
import BottomSheetTakeCheckup from './pages/bottom_sheet_take_checkup';
import HomeRecordAtOnce from './pages/home_record_at_once';
import HomeRecordAtOnceConfirm from './pages/home_record_at_once_confirm';
import BottomSheetCalendarSelect from './pages/bottom_sheet_calendar_select';
import HealthCareBloodSugar from './pages/health_care_blood_sugar';
import HealthCareBloodSugarTarget from './pages/health_care_blood_sugar_target';
import HealthCareBloodSugarInput from './pages/health_care_blood_sugar_input';
import HealthCareBloodSugarDetail from './pages/health_care_blood_sugar_detail';
import HealthCareHistory from './pages/health_care_history';
import HealthCareBloodPressure from './pages/health_care_blood_pressure';
import HealthCareBloodPressureTarget from './pages/health_care_blood_pressure_target';
import HealthCareBloodPressureInput from './pages/health_care_blood_pressure_input';
import HealthCareBloodPressureDetail from './pages/health_care_blood_pressure_detail';
import HealthCareHistory2 from './pages/health_care_history_2';
import HealthCareWeight from './pages/health_care_weight';
import HealthCareWeightTarget from './pages/health_care_weight_target';
import HealthCareWeightDetail from './pages/health_care_weight_detail';
import HealthCareWeightInput from './pages/health_care_weight_input';
import HealthCareHistory3 from './pages/health_care_history_3';
import TakingMedicationConfirm from './pages/taking_medication_confirm';
import TakingMedicationInput from './pages/taking_medication_input';
import TakingMedicationInput2 from './pages/taking_medication_input_2';
import TakingMedicationInput3 from './pages/taking_medication_input_3';
import TakingMedicationInput4 from './pages/taking_medication_input_4';
import PopupToast from './pages/popup_toast';
import TakingMedicationIng from './pages/taking_medication_ing';
import TakingMedicationInputDirectly from './pages/taking_medication_input_directly';
import TakingMedicationInputDirectlyConfirm from './pages/taking_medication_input_directly_confirm';
import TakingMedicationInputDirectly2 from './pages/taking_medication_input_directly_2';
import HealthCareNoDrinking from './pages/health_care_no_drinking';
import HealthCareMeal from './pages/health_care_meal';
import HealthCareMealTarget from './pages/health_care_meal_target';
import HealthCareMealBottomSheet from './pages/bottom_sheet_meal_select';
import BottomSheetMealSelect from './pages/bottom_sheet_meal_select';
import HealthCareMealInput from './pages/health_care_meal_input';
import HealthCareMealInput2 from './pages/health_care_meal_input_2';
import HealthCareMealInput3 from './pages/health_care_meal_input_3';
import HealthCareMealInputDirectly from './pages/health_care_meal_input_directly';
import HealthCareMealDetail from './pages/health_care_meal_detail';
import HealthCareWorkout from './pages/health_care_workout';
import HealthCareMealHistory from './pages/health_care_meal_history';
import HealthCareWorkoutTarget from './pages/health_care_workout_target';
import SeeMore from './pages/see_more';
import HealthCareWorkoutInput from './pages/health_care_workout_input';
import HealthCareWorkoutSelect from './pages/health_care_workout_select';
import HealthCareWorkoutEdit from './pages/health_care_workout_edit';
import HealthCareWorkoutDetail from './pages/health_care_workout_detail';
import SeeMoreSetting from './pages/see_more_setting';
import SeeMoreMy from './pages/see_more_my';
import BottomSheetNoDrinking from './pages/bottom_sheet_no_drinking';
import FamilyManagement from './pages/family_management';
import FamilyManagementAdd from './pages/family_management_add';
import FamilyManagement2 from './pages/family_management_2';
import FamilyManagement3 from './pages/family_management_3';
import FamilyManagementView from './pages/family_management_view';
import FamilyManagementEdit from './pages/family_management_edit';
import FamilyManagementInvite from './pages/family_management_invite';
import BottomSheetFamilyAgreement from './pages/bottom_sheet_family_agreement';
import FamilyManagementConfirm from './pages/family_management_confirm';
import IdentityVerification from './pages/identity_verification';
import SelectCare from './pages/select_care';
import CustomerCenter from './pages/customer_center';
import CustomerCenterQuestion from './pages/customer_center_question';
import CustomerCenterInquiry from './pages/customer_center_inquiry';
import CustomerCenterInquiryEmpty from './pages/customer_center_inquiry_empty';
import CustomerCenterInquiry2 from './pages/customer_center_inquiry_2';
import CustomerCenterInquiry3 from './pages/customer_center_inquiry_3';
import Login from './pages/login';
import BottomSheetLogin from './pages/bottom_sheet_login';
import LoginComplete from './pages/login_complete';
import CustomerCenterNoticeAll from './pages/customer_center_notice_all';
import CustomerCenterNotice from './pages/customer_center_notice';
import CustomerCenterEvent from './pages/customer_center_event';
import CustomerCenterEmpty from './pages/customer_center_empty';
import CustomerCenterNoticeAllEmpty from './pages/customer_center_notice_all_empty';
import CustomerCenterNoticeDetail from './pages/customer_center_notice_detail';
import TermsOfUse from './pages/terms_of_use';
import TermsOfUseDetail from './pages/terms_of_use_detail';
import TermsOfUseQuit from './pages/terms_of_use_quit';
import PopupQuit from './pages/popup_quit';
import AlarmEmpty from './pages/alarm_empty';
import AlarmService from './pages/alarm_service';
import AlarmTakePill from './pages/alarm_take_pill';
import Onboading from './pages/onboading';
import AiHealthDoctor from './pages/ai_health_doctor';
import Agreement from './pages/agreement';
import AiReport from './pages/ai_report';
import Splash from './pages/splash';
import AiSplash from './pages/splash';
import HomeEmpty from './pages/home_empty';
import Ocr from './pages/ocr';
import Scroll from './pages/scroll';
import IdentityVerification2 from './pages/identity_verification_2';
import IdentityVerification3 from './pages/identity_verification_3';
import Camera from './pages/camera';
import Loading from './pages/loading';
import AiReportEmpty from './pages/aireport_empty';
import IntroPage from './pages/intro_page';
import IntroPage2 from './pages/intro_page2';
import IntroPage3 from './pages/intro_page3';
import LoadingMedical from './pages/loading_medical';
import LoadingMdical2 from './pages/loading_medical2';
import LoadingHealthAge from './pages/loading_health_age';
import IntroOX from './pages/intro_ox';
import IntroOX1 from './pages/intro_ox_1';
import FamilyManagement4 from './pages/family_management_4';
import HomeTip from './pages/home_tip';
import HomeTipDetail from './pages/home_tip_detail';
import HomeTipDetail2 from './pages/home_tip_detail2';
import FamilyManagementCoachMark from './pages/family_management_coachmark';
import FamilyManagementList1 from './pages/family_management_list1';
import HomeTipDetail3 from './pages/home_tip_detail3';
import AiRecommendEmpty from './pages/ai_recommend_empty';
import AiRecommendEmpty2 from './pages/ai_recommend_empty2';
import AiRecommendSelect from './pages/ai_recommend_select';
import AiRecommendView from './pages/ai_recommend_view';
import FamilyManagementAddContact from './pages/family_management_add_contact';
import FamilyManagementAddEmpty from './pages/family_management_add_empty';
import LoginInput from './pages/login_input';
import JoinTheMembership from './pages/join_the_membership';
import JoinTheMembership2 from './pages/join_the_membership_2';
import FindId from './pages/find_id';
import FindPw from './pages/find_pw';
import FindPw2 from './pages/find_pw_2';

const Home = () => <h2>Home Page</h2>;
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my_care" element={<MyCare />} />
        <Route path="/usage_records" element={<UsageRecords />} />
        <Route path="/usage_records_empty" element={<UsageRecordsEmpty />} />
        <Route
          path="/usage_records_bottomsheet"
          element={<UsageRecordsBottomsheet />}
        />
        <Route path="/checkup_empty" element={<CheckupEmpty />} />
        <Route
          path="/checkup_empty_confirm"
          element={<CheckupEmptyConfirm />}
        />
        <Route path="/prediction_kidneys" element={<PredictionKidneys />} />
        <Route path="/my_care_add" element={<MyCareAdd />} />
        <Route path="/easy_login" element={<EasyLogin />} />
        <Route path="/easy_login_kakao" element={<EasyLoginKaKao />} />
        <Route path="/blood_pressure" element={<BloodPressure />} />
        <Route path="/checkup_result" element={<CheckupResult />} />
        <Route path="/checkup_result2" element={<CheckupResult2 />} />
        <Route path="/checkup_result3" element={<CheckupResult3 />} />
        <Route path="/checkup_result4" element={<CheckupResult4 />} />
        <Route path="/checkup_result5" element={<CheckupResult5 />} />
        <Route path="/checkup_result6" element={<CheckupResult6 />} />
        <Route path="/checkup_result7" element={<CheckupResult7 />} />
        <Route path="/checkup_result8" element={<CheckupResult8 />} />
        <Route path="/checkup_result9" element={<CheckupResult9 />} />
        <Route path="/checkup_result10" element={<CheckupResult10 />} />
        <Route path="/checkup_loading" element={<CheckupLoading />} />
        <Route path="/checkup_input" element={<CheckupInput />} />
        <Route path="/checkup_input_2" element={<CheckupInput2 />} />
        <Route path="/checkup_input_3" element={<CheckupInput3 />} />
        <Route path="/checkup_input_4" element={<CheckupInput4 />} />
        <Route path="/checkup_input_5" element={<CheckupInput5 />} />
        <Route path="/checkup_input_6" element={<CheckupInput6 />} />
        <Route path="/checkup_input_7" element={<CheckupInput7 />} />
        <Route path="/checkup_input_8" element={<CheckupInput8 />} />
        <Route path="/checkup_input_9" element={<CheckupInput9 />} />
        <Route path="/checkup_input_10" element={<CheckupInput10 />} />
        <Route path="/popup" element={<Popup />} />
        <Route
          path="/bottom_sheet_unit_select"
          element={<BottomSheetUnitSelect />}
        />
        <Route
          path="/bottom_sheet_take_checkup"
          element={<BottomSheetTakeCheckup />}
        />
        <Route path="/home_record_at_once" element={<HomeRecordAtOnce />} />
        <Route
          path="/home_record_at_once_confirm"
          element={<HomeRecordAtOnceConfirm />}
        />
        <Route
          path="/bottom_sheet_calendar_select"
          element={<BottomSheetCalendarSelect />}
        />
        <Route
          path="/health_care_blood_sugar"
          element={<HealthCareBloodSugar />}
        />
        <Route
          path="/health_care_blood_sugar_target"
          element={<HealthCareBloodSugarTarget />}
        />
        <Route
          path="/health_care_blood_sugar_input"
          element={<HealthCareBloodSugarInput />}
        />
        <Route
          path="/health_care_blood_sugar_detail"
          element={<HealthCareBloodSugarDetail />}
        />
        <Route path="/health_care_history" element={<HealthCareHistory />} />
        <Route
          path="/health_care_blood_pressure"
          element={<HealthCareBloodPressure />}
        />
        <Route
          path="/health_care_blood_pressure_target"
          element={<HealthCareBloodPressureTarget />}
        />
        <Route
          path="/health_care_blood_pressure_input"
          element={<HealthCareBloodPressureInput />}
        />
        <Route
          path="/health_care_blood_pressure_detail"
          element={<HealthCareBloodPressureDetail />}
        />
        <Route path="/health_care_history_2" element={<HealthCareHistory2 />} />
        <Route path="/health_care_weight" element={<HealthCareWeight />} />
        <Route
          path="/health_care_weight_target"
          element={<HealthCareWeightTarget />}
        />
        <Route
          path="/health_care_weight_detail"
          element={<HealthCareWeightDetail />}
        />
        <Route
          path="/health_care_weight_input"
          element={<HealthCareWeightInput />}
        />
        <Route path="/health_care_history_3" element={<HealthCareHistory3 />} />
        <Route
          path="/taking_medication_confirm"
          element={<TakingMedicationConfirm />}
        />
        <Route
          path="/taking_medication_input"
          element={<TakingMedicationInput />}
        />
        <Route
          path="/taking_medication_input_2"
          element={<TakingMedicationInput2 />}
        />
        <Route
          path="/taking_medication_input_3"
          element={<TakingMedicationInput3 />}
        />
        <Route
          path="/taking_medication_input_4"
          element={<TakingMedicationInput4 />}
        />
        <Route path="/popup_toast" element={<PopupToast />} />
        <Route
          path="/taking_medication_ing"
          element={<TakingMedicationIng />}
        />
        <Route
          path="/taking_medication_input_directly"
          element={<TakingMedicationInputDirectly />}
        />
        <Route
          path="/taking_medication_input_directly_confirm"
          element={<TakingMedicationInputDirectlyConfirm />}
        />
        <Route
          path="/taking_medication_input_directly_2"
          element={<TakingMedicationInputDirectly2 />}
        />
        <Route
          path="/health_care_no_drinking"
          element={<HealthCareNoDrinking />}
        />
        <Route path="/health_care_meal" element={<HealthCareMeal />} />
        <Route
          path="/health_care_meal_target"
          element={<HealthCareMealTarget />}
        />
        <Route
          path="/bottom_sheet_meal_select"
          element={<BottomSheetMealSelect />}
        />
        <Route
          path="/health_care_meal_input"
          element={<HealthCareMealInput />}
        />
        <Route
          path="/health_care_meal_input_2"
          element={<HealthCareMealInput2 />}
        />
        <Route
          path="/health_care_meal_input_3"
          element={<HealthCareMealInput3 />}
        />
        <Route
          path="/health_care_meal_input_directly"
          element={<HealthCareMealInputDirectly />}
        />
        <Route
          path="/health_care_meal_detail"
          element={<HealthCareMealDetail />}
        />
        <Route
          path="/health_care_meal_history"
          element={<HealthCareMealHistory />}
        />
        <Route path="/health_care_workout" element={<HealthCareWorkout />} />
        <Route
          path="/health_care_workout_target"
          element={<HealthCareWorkoutTarget />}
        />
        <Route path="/see_more" element={<SeeMore />} />
        <Route
          path="/health_care_workout_input"
          element={<HealthCareWorkoutInput />}
        />
        <Route
          path="/health_care_workout_select"
          element={<HealthCareWorkoutSelect />}
        />
        <Route
          path="/health_care_workout_edit"
          element={<HealthCareWorkoutEdit />}
        />
        <Route
          path="/health_care_workout_detail"
          element={<HealthCareWorkoutDetail />}
        />
        <Route path="/see_more_setting" element={<SeeMoreSetting />} />
        <Route path="/see_more_my" element={<SeeMoreMy />} />
        <Route
          path="/bottom_sheet_no_drinking"
          element={<BottomSheetNoDrinking />}
        />
        <Route path="/family_management" element={<FamilyManagement />} />
        <Route
          path="/family_management_add"
          element={<FamilyManagementAdd />}
        />
        <Route path="/family_management_2" element={<FamilyManagement2 />} />
        <Route path="/family_management_3" element={<FamilyManagement3 />} />
        <Route
          path="/family_management_view"
          element={<FamilyManagementView />}
        />
        <Route
          path="/family_management_edit"
          element={<FamilyManagementEdit />}
        />
        <Route
          path="/family_management_invite"
          element={<FamilyManagementInvite />}
        />
        <Route
          path="/bottom_sheet_family_agreement"
          element={<BottomSheetFamilyAgreement />}
        />
        <Route
          path="/family_management_confirm"
          element={<FamilyManagementConfirm />}
        />
        <Route
          path="/identity_verification"
          element={<IdentityVerification />}
        />
        <Route path="/select_care" element={<SelectCare />} />
        <Route path="/customer_center" element={<CustomerCenter />} />
        <Route
          path="/customer_center_question"
          element={<CustomerCenterQuestion />}
        />
        <Route
          path="/customer_center_inquiry"
          element={<CustomerCenterInquiry />}
        />
        <Route
          path="/customer_center_inquiry_empty"
          element={<CustomerCenterInquiryEmpty />}
        />
        <Route
          path="/customer_center_inquiry_2"
          element={<CustomerCenterInquiry2 />}
        />
        <Route
          path="/customer_center_inquiry_3"
          element={<CustomerCenterInquiry3 />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/bottom_sheet_login" element={<BottomSheetLogin />} />
        <Route path="/login_complete" element={<LoginComplete />} />
        <Route
          path="/customer_center_notice_all"
          element={<CustomerCenterNoticeAll />}
        />
        <Route
          path="/customer_center_notice"
          element={<CustomerCenterNotice />}
        />
        <Route
          path="/customer_center_event"
          element={<CustomerCenterEvent />}
        />
        <Route
          path="/customer_center_empty"
          element={<CustomerCenterEmpty />}
        />
        <Route
          path="/customer_center_notice_all_empty"
          element={<CustomerCenterNoticeAllEmpty />}
        />
        <Route
          path="/customer_center_notice_detail"
          element={<CustomerCenterNoticeDetail />}
        />
        <Route path="/terms_of_use" element={<TermsOfUse />} />
        <Route path="/terms_of_use_detail" element={<TermsOfUseDetail />} />
        <Route path="/terms_of_use_quit" element={<TermsOfUseQuit />} />
        <Route path="/popup_quit" element={<PopupQuit />} />
        <Route path="/alarm_empty" element={<AlarmEmpty />} />
        <Route path="/alarm_service" element={<AlarmService />} />
        <Route path="/alarm_take_pill" element={<AlarmTakePill />} />
        <Route path="/onboading" element={<Onboading />} />
        <Route path="/ai_health_doctor" element={<AiHealthDoctor />} />
        <Route path="/agreement" element={<Agreement />} />
        <Route path="/ai_report" element={<AiReport />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/home_empty" element={<HomeEmpty />} />
        <Route
          path="/bottom_sheet_unit_select"
          element={<BottomSheetUnitSelect />}
        />
        <Route path="/ocr" element={<Ocr />} />
        <Route path="/scroll" element={<Scroll />} />
        <Route
          path="/identity_verification_2"
          element={<IdentityVerification2 />}
        />
        <Route
          path="/identity_verification_3"
          element={<IdentityVerification3 />}
        />
        <Route path="/camera" element={<Camera />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/aireport_empty" element={<AiReportEmpty />} />
        <Route path="/intro_page" element={<IntroPage />} />
        <Route path="/intro_page2" element={<IntroPage2 />} />
        <Route path="/intro_page3" element={<IntroPage3 />} />
        <Route path="/loading_medical" element={<LoadingMedical />} />
        <Route path="/loading_medical2" element={<LoadingMdical2 />} />
        <Route path="/loading_health_age" element={<LoadingHealthAge />} />
        <Route path="/intro_ox" element={<IntroOX />} />
        <Route path="/intro_ox_1" element={<IntroOX1 />} />
        <Route path="/family_management_4" element={<FamilyManagement4 />} />
        <Route path="/home_tip" element={<HomeTip />} />
        <Route path="/home_tip_detail" element={<HomeTipDetail />} />
        <Route path="/home_tip_detail2" element={<HomeTipDetail2 />} />
        <Route path="/home_tip_detail3" element={<HomeTipDetail3 />} />
        <Route
          path="/family_management_coachmark"
          element={<FamilyManagementCoachMark />}
        />
        <Route
          path="/family_management_list1"
          element={<FamilyManagementList1 />}
        />
        <Route path="/ai_recommend_empty" element={<AiRecommendEmpty />} />
        <Route path="/ai_recommend_empty2" element={<AiRecommendEmpty2 />} />
        <Route path="/ai_recommend_select" element={<AiRecommendSelect />} />
        <Route path="/ai_recommend_view" element={<AiRecommendView />} />
        <Route
          path="/family_management_add_contact"
          element={<FamilyManagementAddContact />}
        />
        <Route
          path="/family_management_add_empty"
          element={<FamilyManagementAddEmpty />}
        />
        <Route path="/login_input" element={<LoginInput />} />
        <Route path="/join_the_membership" element={<JoinTheMembership />} />
        <Route path="/join_the_membership_2" element={<JoinTheMembership2 />} />
        <Route path="/find_id" element={<FindId />} />
        <Route path="/find_pw" element={<FindPw />} />
        <Route path="/find_pw_2" element={<FindPw2 />} />
      </Routes>
    </Router>
  );
}
export default App;
