const setItemWithExpiration = (key, value, expirationHours) => {
    const expirationMilliseconds = expirationHours * 60 * 60 * 1000; // Convert hours to milliseconds
    const item = {
      value: value,
      expiration: new Date().getTime() + expirationMilliseconds
    };
    localStorage.setItem(key, JSON.stringify(item));
  }
  
  const getItemWithExpiration = (key) => {
    const item = JSON.parse(localStorage.getItem(key));
    if (item && item.expiration > new Date().getTime()) {
      return item.value;
    }
    // Übersetzung aus Local Storage löschen
    localStorage.removeItem(key);
    return null;
  }
  
 export { setItemWithExpiration, getItemWithExpiration }