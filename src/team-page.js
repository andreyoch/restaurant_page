function createTeamPage() {
  const teamPage = document.createElement('div');
  teamPage.classList.add('team');

  const teamSubtitle = document.createElement('div');
  teamSubtitle.classList.add('team_subtitle','subtitle');
  teamSubtitle.textContent = 'meet our team';

  const teamPageRow = document.createElement('div');
  teamPageRow.classList.add('team_row');

  const joe = createTeamMemberCard('joe', 'head chef');
  const mike = createTeamMemberCard('mike', 'manager');
  const steve = createTeamMemberCard('steve', 'butcher chef');
  const ben = createTeamMemberCard('ben', 'deliveryman');

  teamPageRow.append(joe, mike, steve, ben);
  teamPage.append (teamSubtitle,teamPageRow);

  return teamPage;
}

function createTeamMemberCard(memberName, specialization) {
  const teamMemberCard = document.createElement('div');
  teamMemberCard.classList.add('team_member');

  const teamMemberImg = document.createElement('img');
  teamMemberImg.src = `img/${memberName}.png`;
  teamMemberImg.alt = `${memberName} - ${specialization}`;

  const teamMemberTitle = document.createElement('div');
  teamMemberTitle.classList.add('team_member_title');
  teamMemberTitle.textContent = `${memberName}`;

  const teamMemberSubtitle = document.createElement('div');
  teamMemberSubtitle.classList.add('team_member_subtitle');
  teamMemberSubtitle.textContent = `${specialization}`;

  teamMemberCard.append(teamMemberImg, teamMemberTitle, teamMemberSubtitle);

  return teamMemberCard;
}

const teamPage = createTeamPage();

export {teamPage}