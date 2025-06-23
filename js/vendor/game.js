function toggleGameMode() {
  const isKiller = document.getElementById('modeToggle').checked;
  const classic = document.getElementById('classic');
  const killer = document.getElementById('killer');

  if (isKiller) {
    classic.style.display = 'none';
    killer.style.display = 'block';
  } else {
    classic.style.display = 'block';
    killer.style.display = 'none';
  }
}
