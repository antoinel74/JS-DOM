function saveCache(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export { saveCache };
