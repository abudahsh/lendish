import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import SignupReducer from "./SignupReducer";
import UserReducer from "./UserReducer";
import JobPostingReducer from "./JobPostingReducer";
import SearchForFreelancerReducer from "./SearchForFreelancerReducer";
import FreelancerJobSearchReducer from "./FreelancerJobSearchReducer";
import PostedJobsReducer from "./PostedJobsReducer";
import RecommendedJobsReducer from "./RecommendedJobsReducer";
import InvitationReducer from "./InvitationReducer";
import CreateProposalReducer from "./CreateProposalReducer";
import ProtfolioReducer from "./ProtfolioReducer";
import ProfileReducer from "./ProfileReducer";
import PostedProposalsReducer from "./PostedProposalsReducer";
import PaymentReducer from "./PaymentReducer";
import SettingsReducer from "./SettingsReducer";
import StoreReducer from "./StoreReducer";
import ActiveJobsReducer from "./ActiveJobsReducer";
import NotificationsReducer from "./NotificationsReducer";
export default combineReducers({
  login: LoginReducer,
  signup: SignupReducer,
  user: UserReducer,
  jobPosting: JobPostingReducer,
  searchForFreelancer: SearchForFreelancerReducer,
  freelancerJobSearch: FreelancerJobSearchReducer,
  postedJobs: PostedJobsReducer,
  recommendedJobs: RecommendedJobsReducer,
  invitation: InvitationReducer,
  createProposal: CreateProposalReducer,
  protfolio: ProtfolioReducer,
  profile: ProfileReducer,
  postedProposals: PostedProposalsReducer,
  payment: PaymentReducer,
  settings: SettingsReducer,
  store: StoreReducer,
  activeJobs: ActiveJobsReducer,
  notifications: NotificationsReducer
});
