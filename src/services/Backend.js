import { I18nManager, NetInfo, Platform, Alert } from "react-native";
import * as axios from "axios";
import { BASE_URL, config } from "../constants";
import strings from "../strings";
import { store } from "../store";
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.get["Content-Type"] = "application/json";
axios.defaults.headers.patch["Content-Type"] = "application/json";
axios.defaults.headers.delete["Content-Type"] = "application/json";
let apiKey = "b438756bd7637ad463256e81bf5ab36f";

function handleRequestError() {
  NetInfo.isConnected.fetch().then(isConnected => {
    setTimeout(() => {
      if (!isConnected) {
        Toast.show(strings.noInternetConnection);
      }
    });
  });
}

export const Backend = {
  lang: I18nManager.isRTL ? "ar" : "en",
  token: "",
  getStaticPage(code) {
    return axios.get(
      `api/v1.0/pages/?format=json&code=${code}&lang_code=${
        this.lang
      }&api_key=${apiKey}`,
      {
        headers: {}
      }
    );
  },
  getOnBoarding(type) {
    return axios.get(
      `api/v1.0/pages/onboarding/?lang_code=${
        this.lang
      }&format=json&user_type=${type}`,
      {
        headers: {}
      }
    );
  },
  checkUserEmail(email) {
    return axios.get(
      `api/v1.0/email/validate/?email=${email}&api_key=b438756bd7637ad463256e81bf5ab36f&format=json`,
      {
        headers: {}
      }
    );
  },
  login(data) {
    return axios.post(`rest-auth/login/`, data, {
      headers: {}
    });
  },
  register(data) {
    return axios.post(`rest-auth/registration/`, data, {
      headers: {}
    });
  },
  changePassword(data) {
    return axios.post(
      `rest-auth/password/change/`,

      data,
      {
        headers: {
          Authorization: "JWT " + this.token
        }
      }
    );
  },
  resetPassword(data) {
    return axios.post(
      `rest-auth/password/reset/`,

      data
    );
  },
  resendVerification(data) {
    return axios.post(
      `api/v1.0/email/resend-confirmation/`,

      data,
      {
        headers: {
          Authorization: "JWT " + this.token
        }
      }
    );
  },
  fbLogin(access_token, is_vendor) {
    return axios.post(
      `rest-auth/facebook/`,
      {
        access_token,
        is_vendor
      },
      {
        headers: {}
      }
    );
  },
  setSocialUserType(is_vendor) {
    return axios.post(
      `rest-auth/user/`,
      {
        is_vendor
      },
      {
        headers: {
          Authorization: "JWT " + this.token
        }
      }
    );
  },
  getSocialUser() {
    return axios.get(`rest-auth/user/`, {
      headers: {
        Authorization: "JWT " + this.token
      }
    });
  },
  linkedinLogin(access_token, is_vendor) {
    return axios.post(
      `rest-auth/linkedin/`,
      {
        access_token,
        is_vendor
      },
      {
        headers: {}
      }
    );
  },
  getJobCategories() {
    return axios.get(
      `api/v1.0/categories/?api_key=${apiKey}&lang_code=${
        this.lang
      }&format=json`,
      {
        headers: {
          //Authorization: 'JWT ' + this.token
        }
      }
    );
  },
  submitJobPost(data) {
    return axios.post(`api/v1.0/job/create/?format=json`, data, {
      headers: {
        Authorization: "JWT " + this.token
      }
    });
  },
  jobPostingRelatedData() {
    return axios.get(
      `api/v1.0/job/related/?api_key=${apiKey}&lang_code=${
        this.lang
      }&format=json`,
      {
        headers: {
          //Authorization: 'JWT ' + this.token
        }
      }
    );
  },
  searchFreelancers(
    keyword,
    page,
    rating,
    minPrice,
    maxPrice,
    languagesStr,
    countriesStr,
    skillsStr
  ) {
    return axios.get(
      `api/v1.0/partner/?q=${keyword}&api_key=${apiKey}&lang_code=${
        this.lang
      }&format=json&page=${page}&vendor_rating=${rating}&hour_rate_min=${minPrice}&hour_rate_max=${maxPrice}&language=${languagesStr}&country=${countriesStr}&skills=${skillsStr}`,
      {
        headers: {
          //Authorization: 'JWT ' + this.token
        }
      }
    );
  },
  freelancerJobSearch(
    keyword,
    page,
    minPrice,
    maxPrice,
    languagesStr,
    countriesStr,
    skillsStr,
    category
  ) {
    return axios.get(
      `api/v1.0/job/?q=${keyword}&api_key=${apiKey}&lang_code=${
        this.lang
      }&format=json&page=${page}&budget_min=${minPrice}&budget_max=${maxPrice}&partner__language=${languagesStr}&partner__country=${countriesStr}&skills=${skillsStr}&category=${category}`,
      {
        headers: {
          //Authorization: 'JWT ' + this.token
        }
      }
    );
  },
  getFreelancersSearchFilterData() {
    return axios.get(
      `api/v1.0/partner/filter-related/?api_key=${apiKey}&lang_code=${
        this.lang
      }&format=json`,
      {
        headers: {
          //Authorization: 'JWT ' + this.token
        }
      }
    );
  },
  getSkillsData(page, keyword) {
    return axios.get(
      `api/v1.0/categories/skills/?api_key=${apiKey}&lang_code=${
        this.lang
      }&format=json&page=${page}&q=${keyword}`,
      {
        headers: {
          //Authorization: 'JWT ' + this.token
        }
      }
    );
  },
  getPostedJobs(page) {
    return axios.get(
      `/api/v1.0/job/posted/?api_key=${apiKey}&lang_code=${
        this.lang
      }&format=json&page=${page}`,
      {
        headers: {
          Authorization: "JWT " + this.token
        }
      }
    );
  },
  getPostedProposals(page) {
    return axios.get(`/api/v1.0/proposal/posted/`, {
      headers: {
        Authorization: "JWT " + this.token
      }
    });
  },
  getFreelancerRecommendedJobs(page = 1) {
    return axios.get(
      `/api/v1.0/partner/recommended-jobs/?lang_code=${
        this.lang
      }&format=json&page=${page}`,
      {
        headers: {
          Authorization: "JWT " + this.token
        }
      }
    );
  },
  sendJobInvitaion(data) {
    return axios.post(`api/v1.0/job/invite/?format=json`, data, {
      headers: {
        Authorization: "JWT " + this.token
      }
    });
  },
  getPublicProfileData(id) {
    return axios.get(
      `/api/v1.0/partner/public-profile/?api_key=${apiKey}&id=${id}`,
      {
        headers: {
          //Authorization: 'JWT ' + this.token
        }
      }
    );
  },
  getFreelancerInvites() {
    return axios.get(`/api/v1.0/partner/invite-list/?lang_code=${this.lang}`, {
      headers: {
        Authorization: "JWT " + this.token
      }
    });
  },
  getInviteDeclineReasons() {
    return axios.get(
      `api/v1.0/partner/decline-reasons/?api_key=${apiKey}&lang_code=${
        this.lang
      }`,
      {
        headers: {
          //Authorization: 'JWT ' + this.token
        }
      }
    );
  },
  freelancerInviteDecline(inviteId, reasonId) {
    return axios.patch(
      `api/v1.0/partner/decline-reasons/?api_key=${apiKey}&decline=1&invite_id=${inviteId}&decline_id=${reasonId}`,
      "",
      {
        headers: {
          Authorization: "JWT " + this.token
        }
      }
    );
  },
  getCreateProposalData() {
    return axios.get(`/api/v1.0/partner/remaining-fees/`, {
      headers: {
        Authorization: "JWT " + this.token
      }
    });
  },
  submitJobProposal(data) {
    return axios.post(`api/v1.0/proposal/create/`, data, {
      headers: {
        Authorization: "JWT " + this.token
      }
    });
  },
  updateJobProposal(data) {
    return axios.put(`api/v1.0/proposal/update/?id=${data.id}`, data, {
      headers: {
        Authorization: "JWT " + this.token
      }
    });
  },
  updateSkills(ids) {
    return axios.get(`api/v1.0/partner/update-skills/?skills_ids=${ids}`, {
      headers: {
        Authorization: "JWT " + this.token
      }
    });
  },
  updateCountryLanguages(country, languages) {
    return axios.get(
      `api/v1.0/partner/update-country-language/?country_id=${country}&language_ids=${languages}`,
      {
        headers: {
          Authorization: "JWT " + this.token
        }
      }
    );
  },
  getProfessionalTitles() {
    return axios.get(
      `api/v1.0/partner/profession-title-list/?api_key=${apiKey}&lang_code=${
        this.lang
      }`,
      {
        headers: {
          //Authorization: 'JWT ' + this.token
        }
      }
    );
  },
  updateProfessionalBio({ professionalTitle, bio }) {
    return axios.get(
      `api/v1.0/partner/update-profession-bio/?profession_title_id=${
        professionalTitle.id
      }&bio=${bio}`,
      {
        headers: {
          Authorization: "JWT " + this.token
        }
      }
    );
  },
  updateHourlyRate(rate) {
    return axios.get(`api/v1.0/partner/update-hourly_rate/?hour_rate=${rate}`, {
      headers: {
        Authorization: "JWT " + this.token
      }
    });
  },
  getProtfolio() {
    return axios.get(`api/v1.0/partner/update-create-delete-portfolio/`, {
      headers: {
        Authorization: "JWT " + this.token
      }
    });
  },
  submitProtfolioProject(data) {
    return axios.post(
      `api/v1.0/partner/update-create-delete-portfolio/`,
      data,
      {
        headers: {
          Authorization: "JWT " + this.token
        }
      }
    );
  },
  getInnerProfile() {
    return axios.get(`api/v1.0/partner/private-profile/`, {
      headers: {
        Authorization: "JWT " + this.token
      }
    });
  },
  submitProtfolioSkip(data) {
    return axios.post(`api/v1.0/partner/escape-portofolio/`, "", {
      headers: {
        Authorization: "JWT " + this.token
      }
    });
  },
  togglePostedJobPrivacy(jobId, status) {
    return axios.get(
      `api/v1.0/job/privacy-change-delete/?job_id=${jobId}&change_privacy=${status}`,
      {
        headers: {
          Authorization: "JWT " + this.token
        }
      }
    );
  },
  deletePostedJob(jobId) {
    return axios.get(
      `api/v1.0/job/privacy-change-delete/?job_id=${jobId}&delete_job=1`,
      {
        headers: {
          Authorization: "JWT " + this.token
        }
      }
    );
  },
  getChatList() {
    return axios.get(`api/v1.0/chat/`, {
      headers: {
        Authorization: "JWT " + this.token
      }
    });
  },
  contactUs(data) {
    return axios.post(`api/v1.0//contact-us/create/`, data, {
      headers: {
        Authorization: "JWT " + this.token
      }
    });
  },
  getCurrentBalance() {
    return axios.get(`api/v1.0/payments/balance/`, {
      headers: {
        Authorization: "JWT " + this.token
      }
    });
  },
  getTransactions() {
    return axios.get(`api/v1.0/payments/transactions/`, {
      headers: {
        Authorization: "JWT " + this.token
      }
    });
  },
  createBankAccount() {
    return axios.post(`api/v1.0/payments/bank-account-create/`, data, {
      headers: {
        Authorization: "JWT " + this.token
      }
    });
  },
  getBankAccountList() {
    return axios.get(`api/v1.0/payments/bank-account-list/`, {
      headers: {
        Authorization: "JWT " + this.token
      }
    });
  },
  fundReleaseMilestone(data) {
    return axios.post(`api/v1.0/payments/fund-release-milestone/`, data, {
      headers: {
        Authorization: "JWT " + this.token
      }
    });
  },
  milestoneReleaseRequest(data) {
    return axios.post(`api/v1.0/milestone/release-request/`, data, {
      headers: {
        Authorization: "JWT " + this.token
      }
    });
  },
  getConfigurationData() {
    return axios.get(`/api/v1.0/setting/configuration/?api_key=${apiKey}`, {
      headers: {
        //Authorization: 'JWT ' + this.token
      }
    });
  },
  getStoreItems(is_freelancer) {
    return axios.get(
      `api/v1.0/store/items/?lang_code=${this.lang}&is_for_vendor=${
        is_freelancer ? 1 : 0
      }`,
      {
        headers: {
          Authorization: "JWT " + this.token
        }
      }
    );
  },
  buyStoreItem(id) {
    return axios.post(
      `api/v1.0/store/buy-item/`,
      { item_id: id },
      {
        headers: {
          Authorization: "JWT " + this.token
        }
      }
    );
  },
  getActiveJobs(page) {
    return axios.get(
      `/api/v1.0/job/active/?lang_code=${this.lang}&page=${page}`,
      {
        headers: {
          Authorization: "JWT " + this.token
        }
      }
    );
  },
  getNotifications() {
    return axios.get(`/api/v1.0/notification/list/`, {
      headers: {
        Authorization: "JWT " + this.token
      }
    });
  },
  readNotifications() {
    return axios.post(
      `/api/v1.0/notification/read/`,
      {},
      {
        headers: {
          Authorization: "JWT " + this.token
        }
      }
    );
  },
  changeEmail() {
    return axios.post(
      `/api/v1.0/notification/read/`, //needs to be changed
      {},
      {
        headers: {
          Authorization: "JWT " + this.token
        }
      }
    );
  }
};
