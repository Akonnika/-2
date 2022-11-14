let namePerson = document.querySelectorAll('.girl__pic_back');
namePerson.addEventListener('mouseover', showName);
function showName(){
    let showName = document.querySelectorAll('.team__mian_name');
    showName.classList.add('visible_team_mian_name');
}
