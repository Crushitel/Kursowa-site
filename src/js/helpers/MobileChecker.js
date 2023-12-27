/**
 * Клас для перевірки мобільноо браузера.
 */
class MobileChecker {
  static userAgent = navigator.userAgent;

  /**
   * Перевіряє, чи являється пристроєм Android.
   * @returns {boolean} true, якщо пристрій Android, інакше false.
   */
  static get isAndroid() {
    return Boolean(this.userAgent.match(/Android/i));
  }

  /**
   * Перевіряє, чи являється пристроєм BlackBerry.
   * @returns {boolean} true, якщо пристрій BlackBerry, інакше false.
   */
  static get isBlackBerry() {
    return Boolean(this.userAgent.match(/BlackBerry/i));
  }

  /**
   * Перевіряє, чи являється пристроєм iOS (iPhone, iPad или iPod).
   * @returns {boolean} true, якщо устройство iOS, інакше false.
   */
  static get isAppleOS() {
    return Boolean(this.userAgent.match(/iPhone|iPad|iPod/i));
  }

  /**
   * Перевіряє, чи являється пристроєм Opera Mini
   * @returns {boolean} true, якщо пристрій Opera Mini, інакше false.
   */
  static get isOpera() {
    return Boolean(this.userAgent.match(/Opera Mini/i));
  }

  /**
   * Перевіряє, чи являється пристроєм Windows.
   * @returns {boolean} true, якщо пристрій Windows, інакше false.
   */
  static get isWindows() {
    return Boolean(this.userAgent.match(/IEMobile/i));
  }

  /**
   * Перевіряє чи являється пристрій будь-яким із підтримуваних типів (Android, BlackBerry, iOS, Opera Mini, Windows).
   * @returns {boolean} true, Якщо пристрій являється будь-яким із підтримуваних типів , інакше false.
   */
  static get isAny() {
    return (
      MobileChecker.isAndroid ||
      MobileChecker.isBlackBerry ||
      MobileChecker.isAppleOS ||
      MobileChecker.isOpera ||
      MobileChecker.isWindows
    );
  }
}

export default MobileChecker;
