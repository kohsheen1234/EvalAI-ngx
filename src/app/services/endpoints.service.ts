import { Injectable } from '@angular/core';

@Injectable()
export class EndpointsService {

  /**
   * Categories of API paths
   */
  participants = 'participants/';
  hosts = 'hosts/';
  jobs = 'jobs/';
  challenges = 'challenges/';
  challenge = 'challenge/';
  auth = 'auth/';
  analytics = 'analytics/';

  constructor() { }

  /**
   * Login URL
   */
  loginURL() {
    return `auth/login/`;
  }

  /**
   * Signup URL
   */
  signupURL() {
    return `auth/registration/`;
  }

  /**
   * Contact form URL
   */
  contactURL() {
    return `web/contact/`;
  }

  /**
   * Get User Details
   */
  userDetailsURL() {
    return `${this.auth}user/`;
  }

  /**
   * Change Password
   */
  changePasswordURL() {
    return `${this.auth}password/change/`;
  }

  /**
   * Verify Email
   */
  verifyEmailURL() {
    return `${this.auth}registration/verify-email/`;
  }


  /**
   * All Participant teams
   */
  allParticipantTeamsURL() {
    return `${this.participants}participant_team`;
  }

  /**
   * Edit Team Name
   */
  participantTeamURL(teamId) {
    return `${this.participants}participant_team/${teamId}`;
  }

  /**
   * Our Team members
   */
  ourTeamURL() {
    return `web/team/`;
  }

  /**
   * Invite members to participant team
   */
  participantTeamInviteURL(teamId) {
    return `${this.participants}participant_team/${teamId}/invite`;
  }

  /**
   * Fetch all challenges for a time frame
   * @param time  past, present or future
   */
  allChallengesURL(time) {
    return `${this.challenges}${this.challenge}${time}`;
  }


  /**
   * All host teams
   */
  allHostTeamsURL() {
    return `${this.hosts}challenge_host_team`;
  }

  /**
   * Invite members to host team
   */
  hostTeamInviteURL(teamId) {
    return `${this.hosts}challenge_host_teams/${teamId}/invite`;
  }

  /**
   * Fetch challenge details for a given id
   * @param id  challenge id
   */
  challengeDetailsURL(id) {
    return `${this.challenges}${this.challenge}${id}/`;
  }

  /**
   * Challenge stars for a given challenge id
   * @param id  challenge id
   */
  challengeStarsURL(id) {
    return `${this.challenges}${id}/`;
  }

  /**
   * Challenge participant teams for a given challenge id
   * @param id  challenge id
   */
  challengeParticipantTeamsURL(id) {
    return `${this.participants}participant_teams/${this.challenges}${id}/user`;
  }

  /**
   * Challenge participate url for a given challenge id
   * @param id  challenge id
   * @param team  team id
   */
  challengeParticipateURL(id, team) {
    return `${this.challenges}${this.challenge}${id}/participant_team/${team}`;
  }

  /**
   * Challenge phase for a given challenge id
   * @param id  challenge id
   */
  challengePhaseURL(id) {
    return `${this.challenges}${this.challenge}${id}/challenge_phase`;
  }

  /**
   * Challenge phase split for a given challenge id
   * @param id  challenge id
   */
  challengePhaseSplitURL(id) {
    return `${this.challenges}${id}/challenge_phase_split`;
  }

  /**
   * Challenge Creation
   * @param hostTeam  host team id
   */
  challengeCreateURL(hostTeam) {
    return `${this.challenges}${this.challenge}challenge_host_team/${hostTeam}/zip_upload/`;
  }

  /**
   * Challenge Leaderboard fetch
   * @param phaseSplitId  phase split id
   */
  challengeLeaderboardURL(phaseSplitId) {
    return `${this.jobs}challenge_phase_split/${phaseSplitId}/leaderboard/?page_size=1000`;
  }

  /**
   * Challenge Submission
   * @param challenge  challenge id
   * @param phase  phase id
   */
  challengeSubmissionURL(challenge, phase) {
    return `${this.jobs}${this.challenge}${challenge}/challenge_phase/${phase}/submission/`;
  }

  /**
   * Challenge Submission Download
   * @param challenge  challenge id
   * @param phase  phase id
   */
  challengeSubmissionDownloadURL(challenge, phase) {
    return `${this.challenges}${challenge}/phase/${phase}/download_all_submissions/csv/`;
  }

  /**
   * Challenge Submission Counts
   * @param challenge  challenge id
   * @param phase  phase id
   */
  challengeSubmissionCountURL(challenge, phase) {
    return `${this.analytics}${this.challenge}${challenge}/challenge_phase/${phase}/count`;
  }

  /**
   * Challenge Submission Visibility
   * @param challenge  challenge id
   * @param phase  phase id
   * @param submission  submission id
   */
  challengeSubmissionUpdateURL(challenge, phase, submission) {
    return `${this.challengeSubmissionURL(challenge, phase)}${submission}`;
  }

  /**
   * Challenge Submissions Remaining
   * @param challenge  challenge id
   * @param phase  phase id
   */
  challengeSubmissionsRemainingURL(challenge, phase) {
    return `${this.jobs}${challenge}/phases/${phase}/remaining_submissions`;
  }
}
