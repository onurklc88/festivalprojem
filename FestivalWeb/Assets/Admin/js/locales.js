﻿!function (a, b) { "object" == typeof exports && "undefined" != typeof module && "function" == typeof require ? b(require("../moment")) : "function" == typeof define && define.amd ? define(["../moment"], b) : b(a.moment) }(this, function (a) {
    "use strict";
    //! moment.js locale configuration
    //! locale : Belarusian [be]
    //! author : Dmitry Demidov : https://github.com/demidov91
    //! author: Praleska: http://praleska.pro/
    //! Author : Menelion Elensúle : https://github.com/Oire
    function b(a, b) { var c = a.split("_"); return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && b % 10 <= 4 && (b % 100 < 10 || b % 100 >= 20) ? c[1] : c[2] } function c(a, c, d) { var e = { mm: c ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін", hh: c ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін", dd: "дзень_дні_дзён", MM: "месяц_месяцы_месяцаў", yy: "год_гады_гадоў" }; return "m" === d ? c ? "хвіліна" : "хвіліну" : "h" === d ? c ? "гадзіна" : "гадзіну" : a + " " + b(e[d], +a) }
    //! moment.js locale configuration
    //! locale : Breton [br]
    //! author : Jean-Baptiste Le Duigou : https://github.com/jbleduigou
    function d(a, b, c) { var d = { mm: "munutenn", MM: "miz", dd: "devezh" }; return a + " " + g(d[c], a) } function e(a) { switch (f(a)) { case 1: case 3: case 4: case 5: case 9: return a + " bloaz"; default: return a + " vloaz" } } function f(a) { return a > 9 ? f(a % 10) : a } function g(a, b) { return 2 === b ? h(a) : a } function h(a) { var b = { m: "v", b: "v", d: "z" }; return void 0 === b[a.charAt(0)] ? a : b[a.charAt(0)] + a.substring(1) }
    //! moment.js locale configuration
    //! locale : Bosnian [bs]
    //! author : Nedim Cholich : https://github.com/frontyard
    //! based on (hr) translation by Bojan Marković
    function i(a, b, c) { var d = a + " "; switch (c) { case "m": return b ? "jedna minuta" : "jedne minute"; case "mm": return d += 1 === a ? "minuta" : 2 === a || 3 === a || 4 === a ? "minute" : "minuta"; case "h": return b ? "jedan sat" : "jednog sata"; case "hh": return d += 1 === a ? "sat" : 2 === a || 3 === a || 4 === a ? "sata" : "sati"; case "dd": return d += 1 === a ? "dan" : "dana"; case "MM": return d += 1 === a ? "mjesec" : 2 === a || 3 === a || 4 === a ? "mjeseca" : "mjeseci"; case "yy": return d += 1 === a ? "godina" : 2 === a || 3 === a || 4 === a ? "godine" : "godina" } } function j(a) { return a > 1 && a < 5 && 1 !== ~~(a / 10) } function k(a, b, c, d) {
        var e = a + " "; switch (c) {
            case "s":// a few seconds / in a few seconds / a few seconds ago
                return b || d ? "pár sekund" : "pár sekundami"; case "m":// a minute / in a minute / a minute ago
                    return b ? "minuta" : d ? "minutu" : "minutou"; case "mm":// 9 minutes / in 9 minutes / 9 minutes ago
                        // 9 minutes / in 9 minutes / 9 minutes ago
                        return b || d ? e + (j(a) ? "minuty" : "minut") : e + "minutami"; break; case "h":// an hour / in an hour / an hour ago
                            return b ? "hodina" : d ? "hodinu" : "hodinou"; case "hh":// 9 hours / in 9 hours / 9 hours ago
                                // 9 hours / in 9 hours / 9 hours ago
                                return b || d ? e + (j(a) ? "hodiny" : "hodin") : e + "hodinami"; break; case "d":// a day / in a day / a day ago
                                    return b || d ? "den" : "dnem"; case "dd":// 9 days / in 9 days / 9 days ago
                                        // 9 days / in 9 days / 9 days ago
                                        return b || d ? e + (j(a) ? "dny" : "dní") : e + "dny"; break; case "M":// a month / in a month / a month ago
                                            return b || d ? "měsíc" : "měsícem"; case "MM":// 9 months / in 9 months / 9 months ago
                                                // 9 months / in 9 months / 9 months ago
                                                return b || d ? e + (j(a) ? "měsíce" : "měsíců") : e + "měsíci"; break; case "y":// a year / in a year / a year ago
                                                    return b || d ? "rok" : "rokem"; case "yy":// 9 years / in 9 years / 9 years ago
                                                        // 9 years / in 9 years / 9 years ago
                                                        return b || d ? e + (j(a) ? "roky" : "let") : e + "lety"
        }
    }
    //! moment.js locale configuration
    //! locale : German (Austria) [de-at]
    //! author : lluchs : https://github.com/lluchs
    //! author: Menelion Elensúle: https://github.com/Oire
    //! author : Martin Groller : https://github.com/MadMG
    //! author : Mikolaj Dadela : https://github.com/mik01aj
    function l(a, b, c, d) { var e = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [a + " Tage", a + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [a + " Monate", a + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [a + " Jahre", a + " Jahren"] }; return b ? e[c][0] : e[c][1] }
    //! moment.js locale configuration
    //! locale : German [de]
    //! author : lluchs : https://github.com/lluchs
    //! author: Menelion Elensúle: https://github.com/Oire
    //! author : Mikolaj Dadela : https://github.com/mik01aj
    function m(a, b, c, d) { var e = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [a + " Tage", a + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [a + " Monate", a + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [a + " Jahre", a + " Jahren"] }; return b ? e[c][0] : e[c][1] } function n(a) { return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a) }
    //! moment.js locale configuration
    //! locale : Estonian [et]
    //! author : Henry Kehlmann : https://github.com/madhenry
    //! improvements : Illimar Tambek : https://github.com/ragulka
    function o(a, b, c, d) { var e = { s: ["mõne sekundi", "mõni sekund", "paar sekundit"], m: ["ühe minuti", "üks minut"], mm: [a + " minuti", a + " minutit"], h: ["ühe tunni", "tund aega", "üks tund"], hh: [a + " tunni", a + " tundi"], d: ["ühe päeva", "üks päev"], M: ["kuu aja", "kuu aega", "üks kuu"], MM: [a + " kuu", a + " kuud"], y: ["ühe aasta", "aasta", "üks aasta"], yy: [a + " aasta", a + " aastat"] }; return b ? e[c][2] ? e[c][2] : e[c][1] : d ? e[c][0] : e[c][1] } function p(a, b, c, d) { var e = ""; switch (c) { case "s": return d ? "muutaman sekunnin" : "muutama sekunti"; case "m": return d ? "minuutin" : "minuutti"; case "mm": e = d ? "minuutin" : "minuuttia"; break; case "h": return d ? "tunnin" : "tunti"; case "hh": e = d ? "tunnin" : "tuntia"; break; case "d": return d ? "päivän" : "päivä"; case "dd": e = d ? "päivän" : "päivää"; break; case "M": return d ? "kuukauden" : "kuukausi"; case "MM": e = d ? "kuukauden" : "kuukautta"; break; case "y": return d ? "vuoden" : "vuosi"; case "yy": e = d ? "vuoden" : "vuotta" } return e = q(a, d) + " " + e } function q(a, b) { return a < 10 ? b ? Ca[a] : Ba[a] : a }
    //! moment.js locale configuration
    //! locale : Croatian [hr]
    //! author : Bojan Marković : https://github.com/bmarkovic
    function r(a, b, c) { var d = a + " "; switch (c) { case "m": return b ? "jedna minuta" : "jedne minute"; case "mm": return d += 1 === a ? "minuta" : 2 === a || 3 === a || 4 === a ? "minute" : "minuta"; case "h": return b ? "jedan sat" : "jednog sata"; case "hh": return d += 1 === a ? "sat" : 2 === a || 3 === a || 4 === a ? "sata" : "sati"; case "dd": return d += 1 === a ? "dan" : "dana"; case "MM": return d += 1 === a ? "mjesec" : 2 === a || 3 === a || 4 === a ? "mjeseca" : "mjeseci"; case "yy": return d += 1 === a ? "godina" : 2 === a || 3 === a || 4 === a ? "godine" : "godina" } } function s(a, b, c, d) { var e = a; switch (c) { case "s": return d || b ? "néhány másodperc" : "néhány másodperce"; case "m": return "egy" + (d || b ? " perc" : " perce"); case "mm": return e + (d || b ? " perc" : " perce"); case "h": return "egy" + (d || b ? " óra" : " órája"); case "hh": return e + (d || b ? " óra" : " órája"); case "d": return "egy" + (d || b ? " nap" : " napja"); case "dd": return e + (d || b ? " nap" : " napja"); case "M": return "egy" + (d || b ? " hónap" : " hónapja"); case "MM": return e + (d || b ? " hónap" : " hónapja"); case "y": return "egy" + (d || b ? " év" : " éve"); case "yy": return e + (d || b ? " év" : " éve") } return "" } function t(a) { return (a ? "" : "[múlt] ") + "[" + Ma[this.day()] + "] LT[-kor]" }
    //! moment.js locale configuration
    //! locale : Icelandic [is]
    //! author : Hinrik Örn Sigurðsson : https://github.com/hinrik
    function u(a) { return a % 100 === 11 || a % 10 !== 1 } function v(a, b, c, d) { var e = a + " "; switch (c) { case "s": return b || d ? "nokkrar sekúndur" : "nokkrum sekúndum"; case "m": return b ? "mínúta" : "mínútu"; case "mm": return u(a) ? e + (b || d ? "mínútur" : "mínútum") : b ? e + "mínúta" : e + "mínútu"; case "hh": return u(a) ? e + (b || d ? "klukkustundir" : "klukkustundum") : e + "klukkustund"; case "d": return b ? "dagur" : d ? "dag" : "degi"; case "dd": return u(a) ? b ? e + "dagar" : e + (d ? "daga" : "dögum") : b ? e + "dagur" : e + (d ? "dag" : "degi"); case "M": return b ? "mánuður" : d ? "mánuð" : "mánuði"; case "MM": return u(a) ? b ? e + "mánuðir" : e + (d ? "mánuði" : "mánuðum") : b ? e + "mánuður" : e + (d ? "mánuð" : "mánuði"); case "y": return b || d ? "ár" : "ári"; case "yy": return u(a) ? e + (b || d ? "ár" : "árum") : e + (b || d ? "ár" : "ári") } }
    //! moment.js locale configuration
    //! locale : Luxembourgish [lb]
    //! author : mweimerskirch : https://github.com/mweimerskirch
    //! author : David Raison : https://github.com/kwisatz
    function w(a, b, c, d) { var e = { m: ["eng Minutt", "enger Minutt"], h: ["eng Stonn", "enger Stonn"], d: ["een Dag", "engem Dag"], M: ["ee Mount", "engem Mount"], y: ["ee Joer", "engem Joer"] }; return b ? e[c][0] : e[c][1] } function x(a) { var b = a.substr(0, a.indexOf(" ")); return z(b) ? "a " + a : "an " + a } function y(a) { var b = a.substr(0, a.indexOf(" ")); return z(b) ? "viru " + a : "virun " + a }/**
 * Returns true if the word before the given number loses the '-n' ending.
 * e.g. 'an 10 Deeg' but 'a 5 Deeg'
 *
 * @param number {integer}
 * @returns {boolean}
 */
    function z(a) {
        if (a = parseInt(a, 10), isNaN(a)) return !1; if (a < 0)
            // Negative Number --> always true
            return !0; if (a < 10)
                // Only 1 digit
                return 4 <= a && a <= 7; if (a < 100) {
                    // 2 digits
                    var b = a % 10, c = a / 10; return z(0 === b ? c : b)
                } if (a < 1e4) {
                    // 3 or 4 digits --> recursively check first digit
                    for (; a >= 10;) a /= 10; return z(a)
                }
        // Anything larger than 4 digits: recursively check first n-3 digits
        return a /= 1e3, z(a)
    } function A(a, b, c, d) { return b ? "kelios sekundės" : d ? "kelių sekundžių" : "kelias sekundes" } function B(a, b, c, d) { return b ? D(c)[0] : d ? D(c)[1] : D(c)[2] } function C(a) { return a % 10 === 0 || a > 10 && a < 20 } function D(a) { return Pa[a].split("_") } function E(a, b, c, d) { var e = a + " "; return 1 === a ? e + B(a, b, c[0], d) : b ? e + (C(a) ? D(c)[1] : D(c)[0]) : d ? e + D(c)[1] : e + (C(a) ? D(c)[1] : D(c)[2]) }/**
 * @param withoutSuffix boolean true = a length of time; false = before/after a period of time.
 */
    function F(a, b, c) { return c ? b % 10 === 1 && b % 100 !== 11 ? a[2] : a[3] : b % 10 === 1 && b % 100 !== 11 ? a[0] : a[1] } function G(a, b, c) { return a + " " + F(Qa[c], a, b) } function H(a, b, c) { return F(Qa[c], a, b) } function I(a, b) { return b ? "dažas sekundes" : "dažām sekundēm" } function J(a, b, c, d) { var e = ""; if (b) switch (c) { case "s": e = "काही सेकंद"; break; case "m": e = "एक मिनिट"; break; case "mm": e = "%d मिनिटे"; break; case "h": e = "एक तास"; break; case "hh": e = "%d तास"; break; case "d": e = "एक दिवस"; break; case "dd": e = "%d दिवस"; break; case "M": e = "एक महिना"; break; case "MM": e = "%d महिने"; break; case "y": e = "एक वर्ष"; break; case "yy": e = "%d वर्षे" } else switch (c) { case "s": e = "काही सेकंदां"; break; case "m": e = "एका मिनिटा"; break; case "mm": e = "%d मिनिटां"; break; case "h": e = "एका तासा"; break; case "hh": e = "%d तासां"; break; case "d": e = "एका दिवसा"; break; case "dd": e = "%d दिवसां"; break; case "M": e = "एका महिन्या"; break; case "MM": e = "%d महिन्यां"; break; case "y": e = "एका वर्षा"; break; case "yy": e = "%d वर्षां" } return e.replace(/%d/i, a) } function K(a) { return a % 10 < 5 && a % 10 > 1 && ~~(a / 10) % 10 !== 1 } function L(a, b, c) { var d = a + " "; switch (c) { case "m": return b ? "minuta" : "minutę"; case "mm": return d + (K(a) ? "minuty" : "minut"); case "h": return b ? "godzina" : "godzinę"; case "hh": return d + (K(a) ? "godziny" : "godzin"); case "MM": return d + (K(a) ? "miesiące" : "miesięcy"); case "yy": return d + (K(a) ? "lata" : "lat") } }
    //! moment.js locale configuration
    //! locale : Romanian [ro]
    //! author : Vlad Gurdiga : https://github.com/gurdiga
    //! author : Valentin Agachi : https://github.com/avaly
    function M(a, b, c) { var d = { mm: "minute", hh: "ore", dd: "zile", MM: "luni", yy: "ani" }, e = " "; return (a % 100 >= 20 || a >= 100 && a % 100 === 0) && (e = " de "), a + e + d[c] }
    //! moment.js locale configuration
    //! locale : Russian [ru]
    //! author : Viktorminator : https://github.com/Viktorminator
    //! Author : Menelion Elensúle : https://github.com/Oire
    //! author : Коренберг Марк : https://github.com/socketpair
    function N(a, b) { var c = a.split("_"); return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && b % 10 <= 4 && (b % 100 < 10 || b % 100 >= 20) ? c[1] : c[2] } function O(a, b, c) { var d = { mm: b ? "минута_минуты_минут" : "минуту_минуты_минут", hh: "час_часа_часов", dd: "день_дня_дней", MM: "месяц_месяца_месяцев", yy: "год_года_лет" }; return "m" === c ? b ? "минута" : "минуту" : a + " " + N(d[c], +a) } function P(a) { return a > 1 && a < 5 } function Q(a, b, c, d) {
        var e = a + " "; switch (c) {
            case "s":// a few seconds / in a few seconds / a few seconds ago
                return b || d ? "pár sekúnd" : "pár sekundami"; case "m":// a minute / in a minute / a minute ago
                    return b ? "minúta" : d ? "minútu" : "minútou"; case "mm":// 9 minutes / in 9 minutes / 9 minutes ago
                        // 9 minutes / in 9 minutes / 9 minutes ago
                        return b || d ? e + (P(a) ? "minúty" : "minút") : e + "minútami"; break; case "h":// an hour / in an hour / an hour ago
                            return b ? "hodina" : d ? "hodinu" : "hodinou"; case "hh":// 9 hours / in 9 hours / 9 hours ago
                                // 9 hours / in 9 hours / 9 hours ago
                                return b || d ? e + (P(a) ? "hodiny" : "hodín") : e + "hodinami"; break; case "d":// a day / in a day / a day ago
                                    return b || d ? "deň" : "dňom"; case "dd":// 9 days / in 9 days / 9 days ago
                                        // 9 days / in 9 days / 9 days ago
                                        return b || d ? e + (P(a) ? "dni" : "dní") : e + "dňami"; break; case "M":// a month / in a month / a month ago
                                            return b || d ? "mesiac" : "mesiacom"; case "MM":// 9 months / in 9 months / 9 months ago
                                                // 9 months / in 9 months / 9 months ago
                                                return b || d ? e + (P(a) ? "mesiace" : "mesiacov") : e + "mesiacmi"; break; case "y":// a year / in a year / a year ago
                                                    return b || d ? "rok" : "rokom"; case "yy":// 9 years / in 9 years / 9 years ago
                                                        // 9 years / in 9 years / 9 years ago
                                                        return b || d ? e + (P(a) ? "roky" : "rokov") : e + "rokmi"
        }
    }
    //! moment.js locale configuration
    //! locale : Slovenian [sl]
    //! author : Robert Sedovšek : https://github.com/sedovsek
    function R(a, b, c, d) { var e = a + " "; switch (c) { case "s": return b || d ? "nekaj sekund" : "nekaj sekundami"; case "m": return b ? "ena minuta" : "eno minuto"; case "mm": return e += 1 === a ? b ? "minuta" : "minuto" : 2 === a ? b || d ? "minuti" : "minutama" : a < 5 ? b || d ? "minute" : "minutami" : b || d ? "minut" : "minutami"; case "h": return b ? "ena ura" : "eno uro"; case "hh": return e += 1 === a ? b ? "ura" : "uro" : 2 === a ? b || d ? "uri" : "urama" : a < 5 ? b || d ? "ure" : "urami" : b || d ? "ur" : "urami"; case "d": return b || d ? "en dan" : "enim dnem"; case "dd": return e += 1 === a ? b || d ? "dan" : "dnem" : 2 === a ? b || d ? "dni" : "dnevoma" : b || d ? "dni" : "dnevi"; case "M": return b || d ? "en mesec" : "enim mesecem"; case "MM": return e += 1 === a ? b || d ? "mesec" : "mesecem" : 2 === a ? b || d ? "meseca" : "mesecema" : a < 5 ? b || d ? "mesece" : "meseci" : b || d ? "mesecev" : "meseci"; case "y": return b || d ? "eno leto" : "enim letom"; case "yy": return e += 1 === a ? b || d ? "leto" : "letom" : 2 === a ? b || d ? "leti" : "letoma" : a < 5 ? b || d ? "leta" : "leti" : b || d ? "let" : "leti" } } function S(a) { var b = a; return b = a.indexOf("jaj") !== -1 ? b.slice(0, -3) + "leS" : a.indexOf("jar") !== -1 ? b.slice(0, -3) + "waQ" : a.indexOf("DIS") !== -1 ? b.slice(0, -3) + "nem" : b + " pIq" } function T(a) { var b = a; return b = a.indexOf("jaj") !== -1 ? b.slice(0, -3) + "Hu’" : a.indexOf("jar") !== -1 ? b.slice(0, -3) + "wen" : a.indexOf("DIS") !== -1 ? b.slice(0, -3) + "ben" : b + " ret" } function U(a, b, c, d) { var e = V(a); switch (c) { case "mm": return e + " tup"; case "hh": return e + " rep"; case "dd": return e + " jaj"; case "MM": return e + " jar"; case "yy": return e + " DIS" } } function V(a) { var b = Math.floor(a % 1e3 / 100), c = Math.floor(a % 100 / 10), d = a % 10, e = ""; return b > 0 && (e += pb[b] + "vatlh"), c > 0 && (e += ("" !== e ? " " : "") + pb[c] + "maH"), d > 0 && (e += ("" !== e ? " " : "") + pb[d]), "" === e ? "pagh" : e } function W(a, b, c, d) { var e = { s: ["viensas secunds", "'iensas secunds"], m: ["'n míut", "'iens míut"], mm: [a + " míuts", "" + a + " míuts"], h: ["'n þora", "'iensa þora"], hh: [a + " þoras", "" + a + " þoras"], d: ["'n ziua", "'iensa ziua"], dd: [a + " ziuas", "" + a + " ziuas"], M: ["'n mes", "'iens mes"], MM: [a + " mesen", "" + a + " mesen"], y: ["'n ar", "'iens ar"], yy: [a + " ars", "" + a + " ars"] }; return d ? e[c][0] : b ? e[c][0] : e[c][1] }
    //! moment.js locale configuration
    //! locale : Ukrainian [uk]
    //! author : zemlanin : https://github.com/zemlanin
    //! Author : Menelion Elensúle : https://github.com/Oire
    function X(a, b) { var c = a.split("_"); return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && b % 10 <= 4 && (b % 100 < 10 || b % 100 >= 20) ? c[1] : c[2] } function Y(a, b, c) { var d = { mm: b ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин", hh: b ? "година_години_годин" : "годину_години_годин", dd: "день_дні_днів", MM: "місяць_місяці_місяців", yy: "рік_роки_років" }; return "m" === c ? b ? "хвилина" : "хвилину" : "h" === c ? b ? "година" : "годину" : a + " " + X(d[c], +a) } function Z(a, b) { var c = { nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"), accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"), genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_") }, d = /(\[[ВвУу]\]) ?dddd/.test(b) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(b) ? "genitive" : "nominative"; return c[d][a.day()] } function $(a) { return function () { return a + "о" + (11 === this.hours() ? "б" : "") + "] LT" } }
    //! moment.js locale configuration
    //! locale : Afrikaans [af]
    //! author : Werner Mollentze : https://github.com/wernerm
    a.defineLocale("af", {
        months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"), weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"), weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"), weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"), meridiemParse: /vm|nm/i, isPM: function (a) { return /^nm$/i.test(a) }, meridiem: function (a, b, c) { return a < 12 ? c ? "vm" : "VM" : c ? "nm" : "NM" }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Vandag om] LT", nextDay: "[Môre om] LT", nextWeek: "dddd [om] LT", lastDay: "[Gister om] LT", lastWeek: "[Laas] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "oor %s", past: "%s gelede", s: "'n paar sekondes", m: "'n minuut", mm: "%d minute", h: "'n uur", hh: "%d ure", d: "'n dag", dd: "%d dae", M: "'n maand", MM: "%d maande", y: "'n jaar", yy: "%d jaar" }, ordinalParse: /\d{1,2}(ste|de)/, ordinal: function (a) { return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de") }, week: {
            dow: 1,// Maandag is die eerste dag van die week.
            doy: 4
        }
    }),
    //! moment.js locale configuration
    //! locale : Arabic (Algeria) [ar-dz]
    //! author : Noureddine LOUAHEDJ : https://github.com/noureddineme
    a.defineLocale("ar-dz", {
        months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: {
            dow: 0,// Sunday is the first day of the week.
            doy: 4
        }
    });
    //! moment.js locale configuration
    //! locale : Arabic (Lybia) [ar-ly]
    //! author : Ali Hmer: https://github.com/kikoanis
    var _ = { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 0: "0" }, aa = function (a) { return 0 === a ? 0 : 1 === a ? 1 : 2 === a ? 2 : a % 100 >= 3 && a % 100 <= 10 ? 3 : a % 100 >= 11 ? 4 : 5 }, ba = { s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"], m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"], h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"], d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"], M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"], y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"] }, ca = function (a) { return function (b, c, d, e) { var f = aa(b), g = ba[a][aa(b)]; return 2 === f && (g = g[c ? 0 : 1]), g.replace(/%d/i, b) } }, da = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]; a.defineLocale("ar-ly", {
        months: da, monthsShort: da, weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/‏M/‏YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /ص|م/, isPM: function (a) { return "م" === a }, meridiem: function (a, b, c) { return a < 12 ? "ص" : "م" }, calendar: { sameDay: "[اليوم عند الساعة] LT", nextDay: "[غدًا عند الساعة] LT", nextWeek: "dddd [عند الساعة] LT", lastDay: "[أمس عند الساعة] LT", lastWeek: "dddd [عند الساعة] LT", sameElse: "L" }, relativeTime: { future: "بعد %s", past: "منذ %s", s: ca("s"), m: ca("m"), mm: ca("m"), h: ca("h"), hh: ca("h"), d: ca("d"), dd: ca("d"), M: ca("M"), MM: ca("M"), y: ca("y"), yy: ca("y") }, preparse: function (a) { return a.replace(/\u200f/g, "").replace(/،/g, ",") }, postformat: function (a) { return a.replace(/\d/g, function (a) { return _[a] }).replace(/,/g, "،") }, week: {
            dow: 6,// Saturday is the first day of the week.
            doy: 12
        }
    }),
    //! moment.js locale configuration
    //! locale : Arabic (Morocco) [ar-ma]
    //! author : ElFadili Yassine : https://github.com/ElFadiliY
    //! author : Abdel Said : https://github.com/abdelsaid
    a.defineLocale("ar-ma", {
        months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: {
            dow: 6,// Saturday is the first day of the week.
            doy: 12
        }
    });
    //! moment.js locale configuration
    //! locale : Arabic (Saudi Arabia) [ar-sa]
    //! author : Suhail Alkowaileet : https://github.com/xsoh
    var ea = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" }, fa = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" }; a.defineLocale("ar-sa", {
        months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /ص|م/, isPM: function (a) { return "م" === a }, meridiem: function (a, b, c) { return a < 12 ? "ص" : "م" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, preparse: function (a) { return a.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (a) { return fa[a] }).replace(/،/g, ",") }, postformat: function (a) { return a.replace(/\d/g, function (a) { return ea[a] }).replace(/,/g, "،") }, week: {
            dow: 0,// Sunday is the first day of the week.
            doy: 6
        }
    }),
    //! moment.js locale configuration
    //! locale  :  Arabic (Tunisia) [ar-tn]
    //! author : Nader Toukabri : https://github.com/naderio
    a.defineLocale("ar-tn", {
        months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    });
    //! moment.js locale configuration
    //! locale : Arabic [ar]
    //! author : Abdel Said: https://github.com/abdelsaid
    //! author : Ahmed Elkhatib
    //! author : forabi https://github.com/forabi
    var ga = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" }, ha = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" }, ia = function (a) { return 0 === a ? 0 : 1 === a ? 1 : 2 === a ? 2 : a % 100 >= 3 && a % 100 <= 10 ? 3 : a % 100 >= 11 ? 4 : 5 }, ja = { s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"], m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"], h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"], d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"], M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"], y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"] }, ka = function (a) { return function (b, c, d, e) { var f = ia(b), g = ja[a][ia(b)]; return 2 === f && (g = g[c ? 0 : 1]), g.replace(/%d/i, b) } }, la = ["كانون الثاني يناير", "شباط فبراير", "آذار مارس", "نيسان أبريل", "أيار مايو", "حزيران يونيو", "تموز يوليو", "آب أغسطس", "أيلول سبتمبر", "تشرين الأول أكتوبر", "تشرين الثاني نوفمبر", "كانون الأول ديسمبر"]; a.defineLocale("ar", {
        months: la, monthsShort: la, weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/‏M/‏YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /ص|م/, isPM: function (a) { return "م" === a }, meridiem: function (a, b, c) { return a < 12 ? "ص" : "م" }, calendar: { sameDay: "[اليوم عند الساعة] LT", nextDay: "[غدًا عند الساعة] LT", nextWeek: "dddd [عند الساعة] LT", lastDay: "[أمس عند الساعة] LT", lastWeek: "dddd [عند الساعة] LT", sameElse: "L" }, relativeTime: { future: "بعد %s", past: "منذ %s", s: ka("s"), m: ka("m"), mm: ka("m"), h: ka("h"), hh: ka("h"), d: ka("d"), dd: ka("d"), M: ka("M"), MM: ka("M"), y: ka("y"), yy: ka("y") }, preparse: function (a) { return a.replace(/\u200f/g, "").replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (a) { return ha[a] }).replace(/،/g, ",") }, postformat: function (a) { return a.replace(/\d/g, function (a) { return ga[a] }).replace(/,/g, "،") }, week: {
            dow: 6,// Saturday is the first day of the week.
            doy: 12
        }
    });
    //! moment.js locale configuration
    //! locale : Azerbaijani [az]
    //! author : topchiyev : https://github.com/topchiyev
    var ma = { 1: "-inci", 5: "-inci", 8: "-inci", 70: "-inci", 80: "-inci", 2: "-nci", 7: "-nci", 20: "-nci", 50: "-nci", 3: "-üncü", 4: "-üncü", 100: "-üncü", 6: "-ncı", 9: "-uncu", 10: "-uncu", 30: "-uncu", 60: "-ıncı", 90: "-ıncı" }; a.defineLocale("az", {
        months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"), monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"), weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"), weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"), weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[bugün saat] LT", nextDay: "[sabah saat] LT", nextWeek: "[gələn həftə] dddd [saat] LT", lastDay: "[dünən] LT", lastWeek: "[keçən həftə] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s sonra", past: "%s əvvəl", s: "birneçə saniyyə", m: "bir dəqiqə", mm: "%d dəqiqə", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir il", yy: "%d il" }, meridiemParse: /gecə|səhər|gündüz|axşam/, isPM: function (a) { return /^(gündüz|axşam)$/.test(a) }, meridiem: function (a, b, c) { return a < 4 ? "gecə" : a < 12 ? "səhər" : a < 17 ? "gündüz" : "axşam" }, ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/, ordinal: function (a) {
            if (0 === a)// special case for zero
                return a + "-ıncı"; var b = a % 10, c = a % 100 - b, d = a >= 100 ? 100 : null; return a + (ma[b] || ma[c] || ma[d])
        }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 7
        }
    }), a.defineLocale("be", {
        months: { format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"), standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_") }, monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"), weekdays: { format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"), standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"), isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/ }, weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"), weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., HH:mm", LLLL: "dddd, D MMMM YYYY г., HH:mm" }, calendar: { sameDay: "[Сёння ў] LT", nextDay: "[Заўтра ў] LT", lastDay: "[Учора ў] LT", nextWeek: function () { return "[У] dddd [ў] LT" }, lastWeek: function () { switch (this.day()) { case 0: case 3: case 5: case 6: return "[У мінулую] dddd [ў] LT"; case 1: case 2: case 4: return "[У мінулы] dddd [ў] LT" } }, sameElse: "L" }, relativeTime: { future: "праз %s", past: "%s таму", s: "некалькі секунд", m: c, mm: c, h: c, hh: c, d: "дзень", dd: c, M: "месяц", MM: c, y: "год", yy: c }, meridiemParse: /ночы|раніцы|дня|вечара/, isPM: function (a) { return /^(дня|вечара)$/.test(a) }, meridiem: function (a, b, c) { return a < 4 ? "ночы" : a < 12 ? "раніцы" : a < 17 ? "дня" : "вечара" }, ordinalParse: /\d{1,2}-(і|ы|га)/, ordinal: function (a, b) { switch (b) { case "M": case "d": case "DDD": case "w": case "W": return a % 10 !== 2 && a % 10 !== 3 || a % 100 === 12 || a % 100 === 13 ? a + "-ы" : a + "-і"; case "D": return a + "-га"; default: return a } }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 7
        }
    }),
    //! moment.js locale configuration
    //! locale : Bulgarian [bg]
    //! author : Krasen Borisov : https://github.com/kraz
    a.defineLocale("bg", {
        months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"), monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"), weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"), weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"), weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[Днес в] LT", nextDay: "[Утре в] LT", nextWeek: "dddd [в] LT", lastDay: "[Вчера в] LT", lastWeek: function () { switch (this.day()) { case 0: case 3: case 6: return "[В изминалата] dddd [в] LT"; case 1: case 2: case 4: case 5: return "[В изминалия] dddd [в] LT" } }, sameElse: "L" }, relativeTime: { future: "след %s", past: "преди %s", s: "няколко секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дни", M: "месец", MM: "%d месеца", y: "година", yy: "%d години" }, ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/, ordinal: function (a) { var b = a % 10, c = a % 100; return 0 === a ? a + "-ев" : 0 === c ? a + "-ен" : c > 10 && c < 20 ? a + "-ти" : 1 === b ? a + "-ви" : 2 === b ? a + "-ри" : 7 === b || 8 === b ? a + "-ми" : a + "-ти" }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 7
        }
    });
    //! moment.js locale configuration
    //! locale : Bengali [bn]
    //! author : Kaushik Gandhi : https://github.com/kaushikgandhi
    var na = { 1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯", 0: "০" }, oa = { "১": "1", "২": "2", "৩": "3", "৪": "4", "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9", "০": "0" }; a.defineLocale("bn", {
        months: "জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"), monthsShort: "জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"), weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"), weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"), weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"), longDateFormat: { LT: "A h:mm সময়", LTS: "A h:mm:ss সময়", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm সময়", LLLL: "dddd, D MMMM YYYY, A h:mm সময়" }, calendar: { sameDay: "[আজ] LT", nextDay: "[আগামীকাল] LT", nextWeek: "dddd, LT", lastDay: "[গতকাল] LT", lastWeek: "[গত] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s পরে", past: "%s আগে", s: "কয়েক সেকেন্ড", m: "এক মিনিট", mm: "%d মিনিট", h: "এক ঘন্টা", hh: "%d ঘন্টা", d: "এক দিন", dd: "%d দিন", M: "এক মাস", MM: "%d মাস", y: "এক বছর", yy: "%d বছর" }, preparse: function (a) { return a.replace(/[১২৩৪৫৬৭৮৯০]/g, function (a) { return oa[a] }) }, postformat: function (a) { return a.replace(/\d/g, function (a) { return na[a] }) }, meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/, meridiemHour: function (a, b) { return 12 === a && (a = 0), "রাত" === b && a >= 4 || "দুপুর" === b && a < 5 || "বিকাল" === b ? a + 12 : a }, meridiem: function (a, b, c) { return a < 4 ? "রাত" : a < 10 ? "সকাল" : a < 17 ? "দুপুর" : a < 20 ? "বিকাল" : "রাত" }, week: {
            dow: 0,// Sunday is the first day of the week.
            doy: 6
        }
    });
    //! moment.js locale configuration
    //! locale : Tibetan [bo]
    //! author : Thupten N. Chakrishar : https://github.com/vajradog
    var pa = { 1: "༡", 2: "༢", 3: "༣", 4: "༤", 5: "༥", 6: "༦", 7: "༧", 8: "༨", 9: "༩", 0: "༠" }, qa = { "༡": "1", "༢": "2", "༣": "3", "༤": "4", "༥": "5", "༦": "6", "༧": "7", "༨": "8", "༩": "9", "༠": "0" }; a.defineLocale("bo", {
        months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"), monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"), weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"), weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"), weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[དི་རིང] LT", nextDay: "[སང་ཉིན] LT", nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT", lastDay: "[ཁ་སང] LT", lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s ལ་", past: "%s སྔན་ལ", s: "ལམ་སང", m: "སྐར་མ་གཅིག", mm: "%d སྐར་མ", h: "ཆུ་ཚོད་གཅིག", hh: "%d ཆུ་ཚོད", d: "ཉིན་གཅིག", dd: "%d ཉིན་", M: "ཟླ་བ་གཅིག", MM: "%d ཟླ་བ", y: "ལོ་གཅིག", yy: "%d ལོ" }, preparse: function (a) { return a.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (a) { return qa[a] }) }, postformat: function (a) { return a.replace(/\d/g, function (a) { return pa[a] }) }, meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/, meridiemHour: function (a, b) { return 12 === a && (a = 0), "མཚན་མོ" === b && a >= 4 || "ཉིན་གུང" === b && a < 5 || "དགོང་དག" === b ? a + 12 : a }, meridiem: function (a, b, c) { return a < 4 ? "མཚན་མོ" : a < 10 ? "ཞོགས་ཀས" : a < 17 ? "ཉིན་གུང" : a < 20 ? "དགོང་དག" : "མཚན་མོ" }, week: {
            dow: 0,// Sunday is the first day of the week.
            doy: 6
        }
    }), a.defineLocale("br", {
        months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"), monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"), weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"), weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"), weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h[e]mm A", LTS: "h[e]mm:ss A", L: "DD/MM/YYYY", LL: "D [a viz] MMMM YYYY", LLL: "D [a viz] MMMM YYYY h[e]mm A", LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A" }, calendar: { sameDay: "[Hiziv da] LT", nextDay: "[Warc'hoazh da] LT", nextWeek: "dddd [da] LT", lastDay: "[Dec'h da] LT", lastWeek: "dddd [paset da] LT", sameElse: "L" }, relativeTime: { future: "a-benn %s", past: "%s 'zo", s: "un nebeud segondennoù", m: "ur vunutenn", mm: d, h: "un eur", hh: "%d eur", d: "un devezh", dd: d, M: "ur miz", MM: d, y: "ur bloaz", yy: e }, ordinalParse: /\d{1,2}(añ|vet)/, ordinal: function (a) { var b = 1 === a ? "añ" : "vet"; return a + b }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }), a.defineLocale("bs", {
        months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () { switch (this.day()) { case 0: return "[u] [nedjelju] [u] LT"; case 3: return "[u] [srijedu] [u] LT"; case 6: return "[u] [subotu] [u] LT"; case 1: case 2: case 4: case 5: return "[u] dddd [u] LT" } }, lastDay: "[jučer u] LT", lastWeek: function () { switch (this.day()) { case 0: case 3: return "[prošlu] dddd [u] LT"; case 6: return "[prošle] [subote] [u] LT"; case 1: case 2: case 4: case 5: return "[prošli] dddd [u] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "par sekundi", m: i, mm: i, h: i, hh: i, d: "dan", dd: i, M: "mjesec", MM: i, y: "godinu", yy: i }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 7
        }
    }),
    //! moment.js locale configuration
    //! locale : Catalan [ca]
    //! author : Juan G. Hurtado : https://github.com/juanghurtado
    a.defineLocale("ca", {
        months: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"), monthsShort: "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"), monthsParseExact: !0, weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"), weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"), weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd D MMMM YYYY H:mm" }, calendar: { sameDay: function () { return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, nextDay: function () { return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, nextWeek: function () { return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, lastDay: function () { return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, lastWeek: function () { return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, sameElse: "L" }, relativeTime: { future: "d'aquí %s", past: "fa %s", s: "uns segons", m: "un minut", mm: "%d minuts", h: "una hora", hh: "%d hores", d: "un dia", dd: "%d dies", M: "un mes", MM: "%d mesos", y: "un any", yy: "%d anys" }, ordinalParse: /\d{1,2}(r|n|t|è|a)/, ordinal: function (a, b) { var c = 1 === a ? "r" : 2 === a ? "n" : 3 === a ? "r" : 4 === a ? "t" : "è"; return "w" !== b && "W" !== b || (c = "a"), a + c }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    });
    //! moment.js locale configuration
    //! locale : Czech [cs]
    //! author : petrbela : https://github.com/petrbela
    var ra = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"), sa = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"); a.defineLocale("cs", {
        months: ra, monthsShort: sa, monthsParse: function (a, b) {
            var c, d = []; for (c = 0; c < 12; c++)
                // use custom parser to solve problem with July (červenec)
                d[c] = new RegExp("^" + a[c] + "$|^" + b[c] + "$", "i"); return d
        }(ra, sa), shortMonthsParse: function (a) { var b, c = []; for (b = 0; b < 12; b++) c[b] = new RegExp("^" + a[b] + "$", "i"); return c }(sa), longMonthsParse: function (a) { var b, c = []; for (b = 0; b < 12; b++) c[b] = new RegExp("^" + a[b] + "$", "i"); return c }(ra), weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"), weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"), weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm", l: "D. M. YYYY" }, calendar: { sameDay: "[dnes v] LT", nextDay: "[zítra v] LT", nextWeek: function () { switch (this.day()) { case 0: return "[v neděli v] LT"; case 1: case 2: return "[v] dddd [v] LT"; case 3: return "[ve středu v] LT"; case 4: return "[ve čtvrtek v] LT"; case 5: return "[v pátek v] LT"; case 6: return "[v sobotu v] LT" } }, lastDay: "[včera v] LT", lastWeek: function () { switch (this.day()) { case 0: return "[minulou neděli v] LT"; case 1: case 2: return "[minulé] dddd [v] LT"; case 3: return "[minulou středu v] LT"; case 4: case 5: return "[minulý] dddd [v] LT"; case 6: return "[minulou sobotu v] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "před %s", s: k, m: k, mm: k, h: k, hh: k, d: k, dd: k, M: k, MM: k, y: k, yy: k }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }),
    //! moment.js locale configuration
    //! locale : Chuvash [cv]
    //! author : Anatoly Mironov : https://github.com/mirontoli
    a.defineLocale("cv", {
        months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"), monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"), weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"), weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"), weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]", LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm", LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm" }, calendar: { sameDay: "[Паян] LT [сехетре]", nextDay: "[Ыран] LT [сехетре]", lastDay: "[Ӗнер] LT [сехетре]", nextWeek: "[Ҫитес] dddd LT [сехетре]", lastWeek: "[Иртнӗ] dddd LT [сехетре]", sameElse: "L" }, relativeTime: { future: function (a) { var b = /сехет$/i.exec(a) ? "рен" : /ҫул$/i.exec(a) ? "тан" : "ран"; return a + b }, past: "%s каялла", s: "пӗр-ик ҫеккунт", m: "пӗр минут", mm: "%d минут", h: "пӗр сехет", hh: "%d сехет", d: "пӗр кун", dd: "%d кун", M: "пӗр уйӑх", MM: "%d уйӑх", y: "пӗр ҫул", yy: "%d ҫул" }, ordinalParse: /\d{1,2}-мӗш/, ordinal: "%d-мӗш", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 7
        }
    }),
    //! moment.js locale configuration
    //! locale : Welsh [cy]
    //! author : Robert Allen : https://github.com/robgallen
    //! author : https://github.com/ryangreaves
    a.defineLocale("cy", {
        months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"), monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"), weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"), weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"), weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"), weekdaysParseExact: !0,
        // time formats are the same as en-gb
        longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Heddiw am] LT", nextDay: "[Yfory am] LT", nextWeek: "dddd [am] LT", lastDay: "[Ddoe am] LT", lastWeek: "dddd [diwethaf am] LT", sameElse: "L" }, relativeTime: { future: "mewn %s", past: "%s yn ôl", s: "ychydig eiliadau", m: "munud", mm: "%d munud", h: "awr", hh: "%d awr", d: "diwrnod", dd: "%d diwrnod", M: "mis", MM: "%d mis", y: "blwyddyn", yy: "%d flynedd" }, ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
        // traditional ordinal numbers above 31 are not commonly used in colloquial Welsh
        ordinal: function (a) {
            var b = a, c = "", d = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed",// 1af to 10fed
            "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"]; return b > 20 ? c = 40 === b || 50 === b || 60 === b || 80 === b || 100 === b ? "fed" : "ain" : b > 0 && (c = d[b]), a + c
        }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }),
    //! moment.js locale configuration
    //! locale : Danish [da]
    //! author : Ulrik Nielsen : https://github.com/mrbase
    a.defineLocale("da", {
        months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"), weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd [d.] D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[I dag kl.] LT", nextDay: "[I morgen kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[I går kl.] LT", lastWeek: "[sidste] dddd [kl] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "få sekunder", m: "et minut", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dage", M: "en måned", MM: "%d måneder", y: "et år", yy: "%d år" }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }), a.defineLocale("de-at", {
        months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", m: l, mm: "%d Minuten", h: l, hh: "%d Stunden", d: l, dd: l, M: l, MM: l, y: l, yy: l }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }), a.defineLocale("de", {
        months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", m: m, mm: "%d Minuten", h: m, hh: "%d Stunden", d: m, dd: m, M: m, MM: m, y: m, yy: m }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    });
    //! moment.js locale configuration
    //! locale : Maldivian [dv]
    //! author : Jawish Hameed : https://github.com/jawish
    var ta = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"], ua = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"]; a.defineLocale("dv", {
        months: ta, monthsShort: ta, weekdays: ua, weekdaysShort: ua, weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/M/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /މކ|މފ/, isPM: function (a) { return "މފ" === a }, meridiem: function (a, b, c) { return a < 12 ? "މކ" : "މފ" }, calendar: { sameDay: "[މިއަދު] LT", nextDay: "[މާދަމާ] LT", nextWeek: "dddd LT", lastDay: "[އިއްޔެ] LT", lastWeek: "[ފާއިތުވި] dddd LT", sameElse: "L" }, relativeTime: { future: "ތެރޭގައި %s", past: "ކުރިން %s", s: "ސިކުންތުކޮޅެއް", m: "މިނިޓެއް", mm: "މިނިޓު %d", h: "ގަޑިއިރެއް", hh: "ގަޑިއިރު %d", d: "ދުވަހެއް", dd: "ދުވަސް %d", M: "މަހެއް", MM: "މަސް %d", y: "އަހަރެއް", yy: "އަހަރު %d" }, preparse: function (a) { return a.replace(/،/g, ",") }, postformat: function (a) { return a.replace(/,/g, "،") }, week: {
            dow: 7,// Sunday is the first day of the week.
            doy: 12
        }
    }),
    //! moment.js locale configuration
    //! locale : Greek [el]
    //! author : Aggelos Karalias : https://github.com/mehiel
    a.defineLocale("el", {
        monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"), monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"), months: function (a, b) { return /D/.test(b.substring(0, b.indexOf("MMMM"))) ? this._monthsGenitiveEl[a.month()] : this._monthsNominativeEl[a.month()] }, monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"), weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"), weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"), weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"), meridiem: function (a, b, c) { return a > 11 ? c ? "μμ" : "ΜΜ" : c ? "πμ" : "ΠΜ" }, isPM: function (a) { return "μ" === (a + "").toLowerCase()[0] }, meridiemParse: /[ΠΜ]\.?Μ?\.?/i, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendarEl: { sameDay: "[Σήμερα {}] LT", nextDay: "[Αύριο {}] LT", nextWeek: "dddd [{}] LT", lastDay: "[Χθες {}] LT", lastWeek: function () { switch (this.day()) { case 6: return "[το προηγούμενο] dddd [{}] LT"; default: return "[την προηγούμενη] dddd [{}] LT" } }, sameElse: "L" }, calendar: function (a, b) { var c = this._calendarEl[a], d = b && b.hours(); return n(c) && (c = c.apply(b)), c.replace("{}", d % 12 === 1 ? "στη" : "στις") }, relativeTime: { future: "σε %s", past: "%s πριν", s: "λίγα δευτερόλεπτα", m: "ένα λεπτό", mm: "%d λεπτά", h: "μία ώρα", hh: "%d ώρες", d: "μία μέρα", dd: "%d μέρες", M: "ένας μήνας", MM: "%d μήνες", y: "ένας χρόνος", yy: "%d χρόνια" }, ordinalParse: /\d{1,2}η/, ordinal: "%dη", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }),
    //! moment.js locale configuration
    //! locale : English (Australia) [en-au]
    //! author : Jared Morse : https://github.com/jarcoal
    a.defineLocale("en-au", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, ordinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function (a) { var b = a % 10, c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th"; return a + c }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }),
    //! moment.js locale configuration
    //! locale : English (Canada) [en-ca]
    //! author : Jonathan Abourbih : https://github.com/jonbca
    a.defineLocale("en-ca", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "YYYY-MM-DD", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, ordinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function (a) { var b = a % 10, c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th"; return a + c } }),
    //! moment.js locale configuration
    //! locale : English (United Kingdom) [en-gb]
    //! author : Chris Gedrim : https://github.com/chrisgedrim
    a.defineLocale("en-gb", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, ordinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function (a) { var b = a % 10, c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th"; return a + c }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }),
    //! moment.js locale configuration
    //! locale : English (Ireland) [en-ie]
    //! author : Chris Cartlidge : https://github.com/chriscartlidge
    a.defineLocale("en-ie", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, ordinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function (a) { var b = a % 10, c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th"; return a + c }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }),
    //! moment.js locale configuration
    //! locale : English (New Zealand) [en-nz]
    //! author : Luke McGregor : https://github.com/lukemcgregor
    a.defineLocale("en-nz", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, ordinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function (a) { var b = a % 10, c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th"; return a + c }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }),
    //! moment.js locale configuration
    //! locale : Esperanto [eo]
    //! author : Colin Dean : https://github.com/colindean
    //! komento: Mi estas malcerta se mi korekte traktis akuzativojn en tiu traduko.
    //!          Se ne, bonvolu korekti kaj avizi min por ke mi povas lerni!
    a.defineLocale("eo", {
        months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"), weekdays: "Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"), weekdaysShort: "Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"), weekdaysMin: "Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D[-an de] MMMM, YYYY", LLL: "D[-an de] MMMM, YYYY HH:mm", LLLL: "dddd, [la] D[-an de] MMMM, YYYY HH:mm" }, meridiemParse: /[ap]\.t\.m/i, isPM: function (a) { return "p" === a.charAt(0).toLowerCase() }, meridiem: function (a, b, c) { return a > 11 ? c ? "p.t.m." : "P.T.M." : c ? "a.t.m." : "A.T.M." }, calendar: { sameDay: "[Hodiaŭ je] LT", nextDay: "[Morgaŭ je] LT", nextWeek: "dddd [je] LT", lastDay: "[Hieraŭ je] LT", lastWeek: "[pasinta] dddd [je] LT", sameElse: "L" }, relativeTime: {
            future: "je %s", past: "antaŭ %s", s: "sekundoj", m: "minuto", mm: "%d minutoj", h: "horo", hh: "%d horoj", d: "tago",//ne 'diurno', ĉar estas uzita por proksimumo
            dd: "%d tagoj", M: "monato", MM: "%d monatoj", y: "jaro", yy: "%d jaroj"
        }, ordinalParse: /\d{1,2}a/, ordinal: "%da", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 7
        }
    });
    //! moment.js locale configuration
    //! locale : Spanish (Dominican Republic) [es-do]
    var va = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"), wa = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"); a.defineLocale("es-do", {
        months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function (a, b) { return /-MMM-/.test(b) ? wa[a.month()] : va[a.month()] }, monthsParseExact: !0, weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" }, calendar: { sameDay: function () { return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextDay: function () { return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextWeek: function () { return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastDay: function () { return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastWeek: function () { return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinalParse: /\d{1,2}º/, ordinal: "%dº", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    });
    //! moment.js locale configuration
    //! locale : Spanish [es]
    //! author : Julio Napurí : https://github.com/julionc
    var xa = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"), ya = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"); a.defineLocale("es", {
        months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function (a, b) { return /-MMM-/.test(b) ? ya[a.month()] : xa[a.month()] }, monthsParseExact: !0, weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, calendar: { sameDay: function () { return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextDay: function () { return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextWeek: function () { return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastDay: function () { return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastWeek: function () { return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinalParse: /\d{1,2}º/, ordinal: "%dº", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }), a.defineLocale("et", {
        months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"), monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"), weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"), weekdaysShort: "P_E_T_K_N_R_L".split("_"), weekdaysMin: "P_E_T_K_N_R_L".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[Täna,] LT", nextDay: "[Homme,] LT", nextWeek: "[Järgmine] dddd LT", lastDay: "[Eile,] LT", lastWeek: "[Eelmine] dddd LT", sameElse: "L" }, relativeTime: { future: "%s pärast", past: "%s tagasi", s: o, m: o, mm: o, h: o, hh: o, d: o, dd: "%d päeva", M: o, MM: o, y: o, yy: o }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }),
    //! moment.js locale configuration
    //! locale : Basque [eu]
    //! author : Eneko Illarramendi : https://github.com/eillarra
    a.defineLocale("eu", {
        months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"), monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"), monthsParseExact: !0, weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"), weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"), weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY[ko] MMMM[ren] D[a]", LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm", LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm", l: "YYYY-M-D", ll: "YYYY[ko] MMM D[a]", lll: "YYYY[ko] MMM D[a] HH:mm", llll: "ddd, YYYY[ko] MMM D[a] HH:mm" }, calendar: { sameDay: "[gaur] LT[etan]", nextDay: "[bihar] LT[etan]", nextWeek: "dddd LT[etan]", lastDay: "[atzo] LT[etan]", lastWeek: "[aurreko] dddd LT[etan]", sameElse: "L" }, relativeTime: { future: "%s barru", past: "duela %s", s: "segundo batzuk", m: "minutu bat", mm: "%d minutu", h: "ordu bat", hh: "%d ordu", d: "egun bat", dd: "%d egun", M: "hilabete bat", MM: "%d hilabete", y: "urte bat", yy: "%d urte" }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 7
        }
    });
    //! moment.js locale configuration
    //! locale : Persian [fa]
    //! author : Ebrahim Byagowi : https://github.com/ebraminio
    var za = { 1: "۱", 2: "۲", 3: "۳", 4: "۴", 5: "۵", 6: "۶", 7: "۷", 8: "۸", 9: "۹", 0: "۰" }, Aa = { "۱": "1", "۲": "2", "۳": "3", "۴": "4", "۵": "5", "۶": "6", "۷": "7", "۸": "8", "۹": "9", "۰": "0" }; a.defineLocale("fa", {
        months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"), monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"), weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"), weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"), weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiemParse: /قبل از ظهر|بعد از ظهر/, isPM: function (a) { return /بعد از ظهر/.test(a) }, meridiem: function (a, b, c) { return a < 12 ? "قبل از ظهر" : "بعد از ظهر" }, calendar: { sameDay: "[امروز ساعت] LT", nextDay: "[فردا ساعت] LT", nextWeek: "dddd [ساعت] LT", lastDay: "[دیروز ساعت] LT", lastWeek: "dddd [پیش] [ساعت] LT", sameElse: "L" }, relativeTime: { future: "در %s", past: "%s پیش", s: "چندین ثانیه", m: "یک دقیقه", mm: "%d دقیقه", h: "یک ساعت", hh: "%d ساعت", d: "یک روز", dd: "%d روز", M: "یک ماه", MM: "%d ماه", y: "یک سال", yy: "%d سال" }, preparse: function (a) { return a.replace(/[۰-۹]/g, function (a) { return Aa[a] }).replace(/،/g, ",") }, postformat: function (a) { return a.replace(/\d/g, function (a) { return za[a] }).replace(/,/g, "،") }, ordinalParse: /\d{1,2}م/, ordinal: "%dم", week: {
            dow: 6,// Saturday is the first day of the week.
            doy: 12
        }
    });
    //! moment.js locale configuration
    //! locale : Finnish [fi]
    //! author : Tarmo Aidantausta : https://github.com/bleadof
    var Ba = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "), Ca = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", Ba[7], Ba[8], Ba[9]]; a.defineLocale("fi", {
        months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"), monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"), weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"), weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"), weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "Do MMMM[ta] YYYY", LLL: "Do MMMM[ta] YYYY, [klo] HH.mm", LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm", l: "D.M.YYYY", ll: "Do MMM YYYY", lll: "Do MMM YYYY, [klo] HH.mm", llll: "ddd, Do MMM YYYY, [klo] HH.mm" }, calendar: { sameDay: "[tänään] [klo] LT", nextDay: "[huomenna] [klo] LT", nextWeek: "dddd [klo] LT", lastDay: "[eilen] [klo] LT", lastWeek: "[viime] dddd[na] [klo] LT", sameElse: "L" }, relativeTime: { future: "%s päästä", past: "%s sitten", s: p, m: p, mm: p, h: p, hh: p, d: p, dd: p, M: p, MM: p, y: p, yy: p }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }),
    //! moment.js locale configuration
    //! locale : Faroese [fo]
    //! author : Ragnar Johannesen : https://github.com/ragnar123
    a.defineLocale("fo", {
        months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"), weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"), weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D. MMMM, YYYY HH:mm" }, calendar: { sameDay: "[Í dag kl.] LT", nextDay: "[Í morgin kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[Í gjár kl.] LT", lastWeek: "[síðstu] dddd [kl] LT", sameElse: "L" }, relativeTime: { future: "um %s", past: "%s síðani", s: "fá sekund", m: "ein minutt", mm: "%d minuttir", h: "ein tími", hh: "%d tímar", d: "ein dagur", dd: "%d dagar", M: "ein mánaði", MM: "%d mánaðir", y: "eitt ár", yy: "%d ár" }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }),
    //! moment.js locale configuration
    //! locale : French (Canada) [fr-ca]
    //! author : Jonathan Abourbih : https://github.com/jonbca
    a.defineLocale("fr-ca", { months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), monthsParseExact: !0, weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Aujourd'hui à] LT", nextDay: "[Demain à] LT", nextWeek: "dddd [à] LT", lastDay: "[Hier à] LT", lastWeek: "dddd [dernier à] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, ordinalParse: /\d{1,2}(er|e)/, ordinal: function (a) { return a + (1 === a ? "er" : "e") } }),
    //! moment.js locale configuration
    //! locale : French (Switzerland) [fr-ch]
    //! author : Gaspard Bucher : https://github.com/gaspard
    a.defineLocale("fr-ch", {
        months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), monthsParseExact: !0, weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Aujourd'hui à] LT", nextDay: "[Demain à] LT", nextWeek: "dddd [à] LT", lastDay: "[Hier à] LT", lastWeek: "dddd [dernier à] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, ordinalParse: /\d{1,2}(er|e)/, ordinal: function (a) { return a + (1 === a ? "er" : "e") }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }),
    //! moment.js locale configuration
    //! locale : French [fr]
    //! author : John Fischer : https://github.com/jfroffice
    a.defineLocale("fr", {
        months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), monthsParseExact: !0, weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Aujourd'hui à] LT", nextDay: "[Demain à] LT", nextWeek: "dddd [à] LT", lastDay: "[Hier à] LT", lastWeek: "dddd [dernier à] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, ordinalParse: /\d{1,2}(er|)/, ordinal: function (a) { return a + (1 === a ? "er" : "") }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    });
    //! moment.js locale configuration
    //! locale : Frisian [fy]
    //! author : Robin van der Vliet : https://github.com/robin0van0der0v
    var Da = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"), Ea = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"); a.defineLocale("fy", {
        months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"), monthsShort: function (a, b) { return /-MMM-/.test(b) ? Ea[a.month()] : Da[a.month()] }, monthsParseExact: !0, weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"), weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"), weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[hjoed om] LT", nextDay: "[moarn om] LT", nextWeek: "dddd [om] LT", lastDay: "[juster om] LT", lastWeek: "[ôfrûne] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "oer %s", past: "%s lyn", s: "in pear sekonden", m: "ien minút", mm: "%d minuten", h: "ien oere", hh: "%d oeren", d: "ien dei", dd: "%d dagen", M: "ien moanne", MM: "%d moannen", y: "ien jier", yy: "%d jierren" }, ordinalParse: /\d{1,2}(ste|de)/, ordinal: function (a) { return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de") }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    });
    //! moment.js locale configuration
    //! locale : Scottish Gaelic [gd]
    //! author : Jon Ashdown : https://github.com/jonashdown
    var Fa = ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"], Ga = ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"], Ha = ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"], Ia = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"], Ja = ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"]; a.defineLocale("gd", {
        months: Fa, monthsShort: Ga, monthsParseExact: !0, weekdays: Ha, weekdaysShort: Ia, weekdaysMin: Ja, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[An-diugh aig] LT", nextDay: "[A-màireach aig] LT", nextWeek: "dddd [aig] LT", lastDay: "[An-dè aig] LT", lastWeek: "dddd [seo chaidh] [aig] LT", sameElse: "L" }, relativeTime: { future: "ann an %s", past: "bho chionn %s", s: "beagan diogan", m: "mionaid", mm: "%d mionaidean", h: "uair", hh: "%d uairean", d: "latha", dd: "%d latha", M: "mìos", MM: "%d mìosan", y: "bliadhna", yy: "%d bliadhna" }, ordinalParse: /\d{1,2}(d|na|mh)/, ordinal: function (a) { var b = 1 === a ? "d" : a % 10 === 2 ? "na" : "mh"; return a + b }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }),
    //! moment.js locale configuration
    //! locale : Galician [gl]
    //! author : Juan G. Hurtado : https://github.com/juanghurtado
    a.defineLocale("gl", {
        months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"), monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"), weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"), weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, calendar: { sameDay: function () { return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT" }, nextDay: function () { return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT" }, nextWeek: function () { return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT" }, lastDay: function () { return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT" }, lastWeek: function () { return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT" }, sameElse: "L" }, relativeTime: { future: function (a) { return 0 === a.indexOf("un") ? "n" + a : "en " + a }, past: "hai %s", s: "uns segundos", m: "un minuto", mm: "%d minutos", h: "unha hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un ano", yy: "%d anos" }, ordinalParse: /\d{1,2}º/, ordinal: "%dº", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }),
    //! moment.js locale configuration
    //! locale : Hebrew [he]
    //! author : Tomer Cohen : https://github.com/tomer
    //! author : Moshe Simantov : https://github.com/DevelopmentIL
    //! author : Tal Ater : https://github.com/TalAter
    a.defineLocale("he", { months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"), monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"), weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"), weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"), weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [ב]MMMM YYYY", LLL: "D [ב]MMMM YYYY HH:mm", LLLL: "dddd, D [ב]MMMM YYYY HH:mm", l: "D/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, calendar: { sameDay: "[היום ב־]LT", nextDay: "[מחר ב־]LT", nextWeek: "dddd [בשעה] LT", lastDay: "[אתמול ב־]LT", lastWeek: "[ביום] dddd [האחרון בשעה] LT", sameElse: "L" }, relativeTime: { future: "בעוד %s", past: "לפני %s", s: "מספר שניות", m: "דקה", mm: "%d דקות", h: "שעה", hh: function (a) { return 2 === a ? "שעתיים" : a + " שעות" }, d: "יום", dd: function (a) { return 2 === a ? "יומיים" : a + " ימים" }, M: "חודש", MM: function (a) { return 2 === a ? "חודשיים" : a + " חודשים" }, y: "שנה", yy: function (a) { return 2 === a ? "שנתיים" : a % 10 === 0 && 10 !== a ? a + " שנה" : a + " שנים" } }, meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i, isPM: function (a) { return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(a) }, meridiem: function (a, b, c) { return a < 5 ? "לפנות בוקר" : a < 10 ? "בבוקר" : a < 12 ? c ? 'לפנה"צ' : "לפני הצהריים" : a < 18 ? c ? 'אחה"צ' : "אחרי הצהריים" : "בערב" } });
    //! moment.js locale configuration
    //! locale : Hindi [hi]
    //! author : Mayank Singhal : https://github.com/mayanksinghal
    var Ka = { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" }, La = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" }; a.defineLocale("hi", {
        months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"), monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"), monthsParseExact: !0, weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"), weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"), weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"), longDateFormat: { LT: "A h:mm बजे", LTS: "A h:mm:ss बजे", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm बजे", LLLL: "dddd, D MMMM YYYY, A h:mm बजे" }, calendar: { sameDay: "[आज] LT", nextDay: "[कल] LT", nextWeek: "dddd, LT", lastDay: "[कल] LT", lastWeek: "[पिछले] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s में", past: "%s पहले", s: "कुछ ही क्षण", m: "एक मिनट", mm: "%d मिनट", h: "एक घंटा", hh: "%d घंटे", d: "एक दिन", dd: "%d दिन", M: "एक महीने", MM: "%d महीने", y: "एक वर्ष", yy: "%d वर्ष" }, preparse: function (a) { return a.replace(/[१२३४५६७८९०]/g, function (a) { return La[a] }) }, postformat: function (a) { return a.replace(/\d/g, function (a) { return Ka[a] }) },
        // Hindi notation for meridiems are quite fuzzy in practice. While there exists
        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
        meridiemParse: /रात|सुबह|दोपहर|शाम/, meridiemHour: function (a, b) { return 12 === a && (a = 0), "रात" === b ? a < 4 ? a : a + 12 : "सुबह" === b ? a : "दोपहर" === b ? a >= 10 ? a : a + 12 : "शाम" === b ? a + 12 : void 0 }, meridiem: function (a, b, c) { return a < 4 ? "रात" : a < 10 ? "सुबह" : a < 17 ? "दोपहर" : a < 20 ? "शाम" : "रात" }, week: {
            dow: 0,// Sunday is the first day of the week.
            doy: 6
        }
    }), a.defineLocale("hr", {
        months: { format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"), standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_") }, monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"), monthsParseExact: !0, weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () { switch (this.day()) { case 0: return "[u] [nedjelju] [u] LT"; case 3: return "[u] [srijedu] [u] LT"; case 6: return "[u] [subotu] [u] LT"; case 1: case 2: case 4: case 5: return "[u] dddd [u] LT" } }, lastDay: "[jučer u] LT", lastWeek: function () { switch (this.day()) { case 0: case 3: return "[prošlu] dddd [u] LT"; case 6: return "[prošle] [subote] [u] LT"; case 1: case 2: case 4: case 5: return "[prošli] dddd [u] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "par sekundi", m: r, mm: r, h: r, hh: r, d: "dan", dd: r, M: "mjesec", MM: r, y: "godinu", yy: r }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 7
        }
    });
    //! moment.js locale configuration
    //! locale : Hungarian [hu]
    //! author : Adam Brunner : https://github.com/adambrunner
    var Ma = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" "); a.defineLocale("hu", {
        months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"), monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"), weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"), weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"), weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY. MMMM D.", LLL: "YYYY. MMMM D. H:mm", LLLL: "YYYY. MMMM D., dddd H:mm" }, meridiemParse: /de|du/i, isPM: function (a) { return "u" === a.charAt(1).toLowerCase() }, meridiem: function (a, b, c) { return a < 12 ? c === !0 ? "de" : "DE" : c === !0 ? "du" : "DU" }, calendar: { sameDay: "[ma] LT[-kor]", nextDay: "[holnap] LT[-kor]", nextWeek: function () { return t.call(this, !0) }, lastDay: "[tegnap] LT[-kor]", lastWeek: function () { return t.call(this, !1) }, sameElse: "L" }, relativeTime: { future: "%s múlva", past: "%s", s: s, m: s, mm: s, h: s, hh: s, d: s, dd: s, M: s, MM: s, y: s, yy: s }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }),
    //! moment.js locale configuration
    //! locale : Armenian [hy-am]
    //! author : Armendarabyan : https://github.com/armendarabyan
    a.defineLocale("hy-am", {
        months: { format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"), standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_") }, monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"), weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"), weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"), weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY թ.", LLL: "D MMMM YYYY թ., HH:mm", LLLL: "dddd, D MMMM YYYY թ., HH:mm" }, calendar: { sameDay: "[այսօր] LT", nextDay: "[վաղը] LT", lastDay: "[երեկ] LT", nextWeek: function () { return "dddd [օրը ժամը] LT" }, lastWeek: function () { return "[անցած] dddd [օրը ժամը] LT" }, sameElse: "L" }, relativeTime: { future: "%s հետո", past: "%s առաջ", s: "մի քանի վայրկյան", m: "րոպե", mm: "%d րոպե", h: "ժամ", hh: "%d ժամ", d: "օր", dd: "%d օր", M: "ամիս", MM: "%d ամիս", y: "տարի", yy: "%d տարի" }, meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/, isPM: function (a) { return /^(ցերեկվա|երեկոյան)$/.test(a) }, meridiem: function (a) { return a < 4 ? "գիշերվա" : a < 12 ? "առավոտվա" : a < 17 ? "ցերեկվա" : "երեկոյան" }, ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/, ordinal: function (a, b) { switch (b) { case "DDD": case "w": case "W": case "DDDo": return 1 === a ? a + "-ին" : a + "-րդ"; default: return a } }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 7
        }
    }),
    //! moment.js locale configuration
    //! locale : Indonesian [id]
    //! author : Mohammad Satrio Utomo : https://github.com/tyok
    //! reference: http://id.wikisource.org/wiki/Pedoman_Umum_Ejaan_Bahasa_Indonesia_yang_Disempurnakan
    a.defineLocale("id", {
        months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"), weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"), weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|siang|sore|malam/, meridiemHour: function (a, b) { return 12 === a && (a = 0), "pagi" === b ? a : "siang" === b ? a >= 11 ? a : a + 12 : "sore" === b || "malam" === b ? a + 12 : void 0 }, meridiem: function (a, b, c) { return a < 11 ? "pagi" : a < 15 ? "siang" : a < 19 ? "sore" : "malam" }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Besok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kemarin pukul] LT", lastWeek: "dddd [lalu pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lalu", s: "beberapa detik", m: "semenit", mm: "%d menit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 7
        }
    }), a.defineLocale("is", {
        months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"), monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"), weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"), weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"), weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd, D. MMMM YYYY [kl.] H:mm" }, calendar: { sameDay: "[í dag kl.] LT", nextDay: "[á morgun kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[í gær kl.] LT", lastWeek: "[síðasta] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "eftir %s", past: "fyrir %s síðan", s: v, m: v, mm: v, h: "klukkustund", hh: v, d: v, dd: v, M: v, MM: v, y: v, yy: v }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }),
    //! moment.js locale configuration
    //! locale : Italian [it]
    //! author : Lorenzo : https://github.com/aliem
    //! author: Mattia Larentis: https://github.com/nostalgiaz
    a.defineLocale("it", {
        months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), weekdays: "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"), weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"), weekdaysMin: "Do_Lu_Ma_Me_Gi_Ve_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Oggi alle] LT", nextDay: "[Domani alle] LT", nextWeek: "dddd [alle] LT", lastDay: "[Ieri alle] LT", lastWeek: function () { switch (this.day()) { case 0: return "[la scorsa] dddd [alle] LT"; default: return "[lo scorso] dddd [alle] LT" } }, sameElse: "L" }, relativeTime: { future: function (a) { return (/^[0-9].+$/.test(a) ? "tra" : "in") + " " + a }, past: "%s fa", s: "alcuni secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" }, ordinalParse: /\d{1,2}º/, ordinal: "%dº", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }),
    //! moment.js locale configuration
    //! locale : Japanese [ja]
    //! author : LI Long : https://github.com/baryon
    a.defineLocale("ja", { months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"), weekdaysShort: "日_月_火_水_木_金_土".split("_"), weekdaysMin: "日_月_火_水_木_金_土".split("_"), longDateFormat: { LT: "Ah時m分", LTS: "Ah時m分s秒", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日Ah時m分", LLLL: "YYYY年M月D日Ah時m分 dddd" }, meridiemParse: /午前|午後/i, isPM: function (a) { return "午後" === a }, meridiem: function (a, b, c) { return a < 12 ? "午前" : "午後" }, calendar: { sameDay: "[今日] LT", nextDay: "[明日] LT", nextWeek: "[来週]dddd LT", lastDay: "[昨日] LT", lastWeek: "[前週]dddd LT", sameElse: "L" }, ordinalParse: /\d{1,2}日/, ordinal: function (a, b) { switch (b) { case "d": case "D": case "DDD": return a + "日"; default: return a } }, relativeTime: { future: "%s後", past: "%s前", s: "数秒", m: "1分", mm: "%d分", h: "1時間", hh: "%d時間", d: "1日", dd: "%d日", M: "1ヶ月", MM: "%dヶ月", y: "1年", yy: "%d年" } }),
    //! moment.js locale configuration
    //! locale : Javanese [jv]
    //! author : Rony Lantip : https://github.com/lantip
    //! reference: http://jv.wikipedia.org/wiki/Basa_Jawa
    a.defineLocale("jv", {
        months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"), weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"), weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /enjing|siyang|sonten|ndalu/, meridiemHour: function (a, b) { return 12 === a && (a = 0), "enjing" === b ? a : "siyang" === b ? a >= 11 ? a : a + 12 : "sonten" === b || "ndalu" === b ? a + 12 : void 0 }, meridiem: function (a, b, c) { return a < 11 ? "enjing" : a < 15 ? "siyang" : a < 19 ? "sonten" : "ndalu" }, calendar: { sameDay: "[Dinten puniko pukul] LT", nextDay: "[Mbenjang pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kala wingi pukul] LT", lastWeek: "dddd [kepengker pukul] LT", sameElse: "L" }, relativeTime: { future: "wonten ing %s", past: "%s ingkang kepengker", s: "sawetawis detik", m: "setunggal menit", mm: "%d menit", h: "setunggal jam", hh: "%d jam", d: "sedinten", dd: "%d dinten", M: "sewulan", MM: "%d wulan", y: "setaun", yy: "%d taun" }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 7
        }
    }),
    //! moment.js locale configuration
    //! locale : Georgian [ka]
    //! author : Irakli Janiashvili : https://github.com/irakli-janiashvili
    a.defineLocale("ka", { months: { standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"), format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_") }, monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"), weekdays: { standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"), format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"), isFormat: /(წინა|შემდეგ)/ }, weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"), weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[დღეს] LT[-ზე]", nextDay: "[ხვალ] LT[-ზე]", lastDay: "[გუშინ] LT[-ზე]", nextWeek: "[შემდეგ] dddd LT[-ზე]", lastWeek: "[წინა] dddd LT-ზე", sameElse: "L" }, relativeTime: { future: function (a) { return /(წამი|წუთი|საათი|წელი)/.test(a) ? a.replace(/ი$/, "ში") : a + "ში" }, past: function (a) { return /(წამი|წუთი|საათი|დღე|თვე)/.test(a) ? a.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(a) ? a.replace(/წელი$/, "წლის წინ") : void 0 }, s: "რამდენიმე წამი", m: "წუთი", mm: "%d წუთი", h: "საათი", hh: "%d საათი", d: "დღე", dd: "%d დღე", M: "თვე", MM: "%d თვე", y: "წელი", yy: "%d წელი" }, ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/, ordinal: function (a) { return 0 === a ? a : 1 === a ? a + "-ლი" : a < 20 || a <= 100 && a % 20 === 0 || a % 100 === 0 ? "მე-" + a : a + "-ე" }, week: { dow: 1, doy: 7 } });
    //! moment.js locale configuration
    //! locale : Kazakh [kk]
    //! authors : Nurlan Rakhimzhanov : https://github.com/nurlan
    var Na = { 0: "-ші", 1: "-ші", 2: "-ші", 3: "-ші", 4: "-ші", 5: "-ші", 6: "-шы", 7: "-ші", 8: "-ші", 9: "-шы", 10: "-шы", 20: "-шы", 30: "-шы", 40: "-шы", 50: "-ші", 60: "-шы", 70: "-ші", 80: "-ші", 90: "-шы", 100: "-ші" }; a.defineLocale("kk", {
        months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"), monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"), weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"), weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"), weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Бүгін сағат] LT", nextDay: "[Ертең сағат] LT", nextWeek: "dddd [сағат] LT", lastDay: "[Кеше сағат] LT", lastWeek: "[Өткен аптаның] dddd [сағат] LT", sameElse: "L" }, relativeTime: { future: "%s ішінде", past: "%s бұрын", s: "бірнеше секунд", m: "бір минут", mm: "%d минут", h: "бір сағат", hh: "%d сағат", d: "бір күн", dd: "%d күн", M: "бір ай", MM: "%d ай", y: "бір жыл", yy: "%d жыл" }, ordinalParse: /\d{1,2}-(ші|шы)/, ordinal: function (a) { var b = a % 10, c = a >= 100 ? 100 : null; return a + (Na[a] || Na[b] || Na[c]) }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 7
        }
    }),
    //! moment.js locale configuration
    //! locale : Cambodian [km]
    //! author : Kruy Vanna : https://github.com/kruyvanna
    a.defineLocale("km", {
        months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"), monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"), weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"), weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"), weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[ថ្ងៃនេះ ម៉ោង] LT", nextDay: "[ស្អែក ម៉ោង] LT", nextWeek: "dddd [ម៉ោង] LT", lastDay: "[ម្សិលមិញ ម៉ោង] LT", lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT", sameElse: "L" }, relativeTime: { future: "%sទៀត", past: "%sមុន", s: "ប៉ុន្មានវិនាទី", m: "មួយនាទី", mm: "%d នាទី", h: "មួយម៉ោង", hh: "%d ម៉ោង", d: "មួយថ្ងៃ", dd: "%d ថ្ងៃ", M: "មួយខែ", MM: "%d ខែ", y: "មួយឆ្នាំ", yy: "%d ឆ្នាំ" }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }),
    //! moment.js locale configuration
    //! locale : Korean [ko]
    //! author : Kyungwook, Park : https://github.com/kyungw00k
    //! author : Jeeeyul Lee <jeeeyul@gmail.com>
    a.defineLocale("ko", { months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"), monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"), weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"), weekdaysShort: "일_월_화_수_목_금_토".split("_"), weekdaysMin: "일_월_화_수_목_금_토".split("_"), longDateFormat: { LT: "A h시 m분", LTS: "A h시 m분 s초", L: "YYYY.MM.DD", LL: "YYYY년 MMMM D일", LLL: "YYYY년 MMMM D일 A h시 m분", LLLL: "YYYY년 MMMM D일 dddd A h시 m분" }, calendar: { sameDay: "오늘 LT", nextDay: "내일 LT", nextWeek: "dddd LT", lastDay: "어제 LT", lastWeek: "지난주 dddd LT", sameElse: "L" }, relativeTime: { future: "%s 후", past: "%s 전", s: "몇 초", ss: "%d초", m: "일분", mm: "%d분", h: "한 시간", hh: "%d시간", d: "하루", dd: "%d일", M: "한 달", MM: "%d달", y: "일 년", yy: "%d년" }, ordinalParse: /\d{1,2}일/, ordinal: "%d일", meridiemParse: /오전|오후/, isPM: function (a) { return "오후" === a }, meridiem: function (a, b, c) { return a < 12 ? "오전" : "오후" } });
    //! moment.js locale configuration
    //! locale : Kyrgyz [ky]
    //! author : Chyngyz Arystan uulu : https://github.com/chyngyz
    var Oa = { 0: "-чү", 1: "-чи", 2: "-чи", 3: "-чү", 4: "-чү", 5: "-чи", 6: "-чы", 7: "-чи", 8: "-чи", 9: "-чу", 10: "-чу", 20: "-чы", 30: "-чу", 40: "-чы", 50: "-чү", 60: "-чы", 70: "-чи", 80: "-чи", 90: "-чу", 100: "-чү" }; a.defineLocale("ky", {
        months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"), monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"), weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"), weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"), weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Бүгүн саат] LT", nextDay: "[Эртең саат] LT", nextWeek: "dddd [саат] LT", lastDay: "[Кече саат] LT", lastWeek: "[Өткен аптанын] dddd [күнү] [саат] LT", sameElse: "L" }, relativeTime: { future: "%s ичинде", past: "%s мурун", s: "бирнече секунд", m: "бир мүнөт", mm: "%d мүнөт", h: "бир саат", hh: "%d саат", d: "бир күн", dd: "%d күн", M: "бир ай", MM: "%d ай", y: "бир жыл", yy: "%d жыл" }, ordinalParse: /\d{1,2}-(чи|чы|чү|чу)/, ordinal: function (a) { var b = a % 10, c = a >= 100 ? 100 : null; return a + (Oa[a] || Oa[b] || Oa[c]) }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 7
        }
    }), a.defineLocale("lb", {
        months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"), weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm [Auer]", LTS: "H:mm:ss [Auer]", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm [Auer]", LLLL: "dddd, D. MMMM YYYY H:mm [Auer]" }, calendar: {
            sameDay: "[Haut um] LT", sameElse: "L", nextDay: "[Muer um] LT", nextWeek: "dddd [um] LT", lastDay: "[Gëschter um] LT", lastWeek: function () {
                // Different date string for 'Dënschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule
                switch (this.day()) { case 2: case 4: return "[Leschten] dddd [um] LT"; default: return "[Leschte] dddd [um] LT" }
            }
        }, relativeTime: { future: x, past: y, s: "e puer Sekonnen", m: w, mm: "%d Minutten", h: w, hh: "%d Stonnen", d: w, dd: "%d Deeg", M: w, MM: "%d Méint", y: w, yy: "%d Joer" }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }),
    //! moment.js locale configuration
    //! locale : Lao [lo]
    //! author : Ryan Hart : https://github.com/ryanhart2
    a.defineLocale("lo", { months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"), monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"), weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"), weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"), weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "ວັນdddd D MMMM YYYY HH:mm" }, meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/, isPM: function (a) { return "ຕອນແລງ" === a }, meridiem: function (a, b, c) { return a < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ" }, calendar: { sameDay: "[ມື້ນີ້ເວລາ] LT", nextDay: "[ມື້ອື່ນເວລາ] LT", nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT", lastDay: "[ມື້ວານນີ້ເວລາ] LT", lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT", sameElse: "L" }, relativeTime: { future: "ອີກ %s", past: "%sຜ່ານມາ", s: "ບໍ່ເທົ່າໃດວິນາທີ", m: "1 ນາທີ", mm: "%d ນາທີ", h: "1 ຊົ່ວໂມງ", hh: "%d ຊົ່ວໂມງ", d: "1 ມື້", dd: "%d ມື້", M: "1 ເດືອນ", MM: "%d ເດືອນ", y: "1 ປີ", yy: "%d ປີ" }, ordinalParse: /(ທີ່)\d{1,2}/, ordinal: function (a) { return "ທີ່" + a } });
    //! moment.js locale configuration
    //! locale : Lithuanian [lt]
    //! author : Mindaugas Mozūras : https://github.com/mmozuras
    var Pa = { m: "minutė_minutės_minutę", mm: "minutės_minučių_minutes", h: "valanda_valandos_valandą", hh: "valandos_valandų_valandas", d: "diena_dienos_dieną", dd: "dienos_dienų_dienas", M: "mėnuo_mėnesio_mėnesį", MM: "mėnesiai_mėnesių_mėnesius", y: "metai_metų_metus", yy: "metai_metų_metus" }; a.defineLocale("lt", {
        months: { format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"), standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"), isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/ }, monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), weekdays: { format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"), standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"), isFormat: /dddd HH:mm/ }, weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"), weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" }, calendar: { sameDay: "[Šiandien] LT", nextDay: "[Rytoj] LT", nextWeek: "dddd LT", lastDay: "[Vakar] LT", lastWeek: "[Praėjusį] dddd LT", sameElse: "L" }, relativeTime: { future: "po %s", past: "prieš %s", s: A, m: B, mm: E, h: B, hh: E, d: B, dd: E, M: B, MM: E, y: B, yy: E }, ordinalParse: /\d{1,2}-oji/, ordinal: function (a) { return a + "-oji" }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    });
    //! moment.js locale configuration
    //! locale : Latvian [lv]
    //! author : Kristaps Karlsons : https://github.com/skakri
    //! author : Jānis Elmeris : https://github.com/JanisE
    var Qa = { m: "minūtes_minūtēm_minūte_minūtes".split("_"), mm: "minūtes_minūtēm_minūte_minūtes".split("_"), h: "stundas_stundām_stunda_stundas".split("_"), hh: "stundas_stundām_stunda_stundas".split("_"), d: "dienas_dienām_diena_dienas".split("_"), dd: "dienas_dienām_diena_dienas".split("_"), M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"), MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"), y: "gada_gadiem_gads_gadi".split("_"), yy: "gada_gadiem_gads_gadi".split("_") }; a.defineLocale("lv", {
        months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"), monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"), weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"), weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"), weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY.", LL: "YYYY. [gada] D. MMMM", LLL: "YYYY. [gada] D. MMMM, HH:mm", LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm" }, calendar: { sameDay: "[Šodien pulksten] LT", nextDay: "[Rīt pulksten] LT", nextWeek: "dddd [pulksten] LT", lastDay: "[Vakar pulksten] LT", lastWeek: "[Pagājušā] dddd [pulksten] LT", sameElse: "L" }, relativeTime: { future: "pēc %s", past: "pirms %s", s: I, m: H, mm: G, h: H, hh: G, d: H, dd: G, M: H, MM: G, y: H, yy: G }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    });
    //! moment.js locale configuration
    //! locale : Montenegrin [me]
    //! author : Miodrag Nikač <miodrag@restartit.me> : https://github.com/miodragnikac
    var Ra = {
        words: {//Different grammatical cases
            m: ["jedan minut", "jednog minuta"], mm: ["minut", "minuta", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mjesec", "mjeseca", "mjeseci"], yy: ["godina", "godine", "godina"]
        }, correctGrammaticalCase: function (a, b) { return 1 === a ? b[0] : a >= 2 && a <= 4 ? b[1] : b[2] }, translate: function (a, b, c) { var d = Ra.words[c]; return 1 === c.length ? b ? d[0] : d[1] : a + " " + Ra.correctGrammaticalCase(a, d) }
    }; a.defineLocale("me", {
        months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"), monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sjutra u] LT", nextWeek: function () { switch (this.day()) { case 0: return "[u] [nedjelju] [u] LT"; case 3: return "[u] [srijedu] [u] LT"; case 6: return "[u] [subotu] [u] LT"; case 1: case 2: case 4: case 5: return "[u] dddd [u] LT" } }, lastDay: "[juče u] LT", lastWeek: function () { var a = ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"]; return a[this.day()] }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "nekoliko sekundi", m: Ra.translate, mm: Ra.translate, h: Ra.translate, hh: Ra.translate, d: "dan", dd: Ra.translate, M: "mjesec", MM: Ra.translate, y: "godinu", yy: Ra.translate }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 7
        }
    }),
    //! moment.js locale configuration
    //! locale : Maori [mi]
    //! author : John Corrigan <robbiecloset@gmail.com> : https://github.com/johnideal
    a.defineLocale("mi", {
        months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"), monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"), monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i, weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"), weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"), weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [i] HH:mm", LLLL: "dddd, D MMMM YYYY [i] HH:mm" }, calendar: { sameDay: "[i teie mahana, i] LT", nextDay: "[apopo i] LT", nextWeek: "dddd [i] LT", lastDay: "[inanahi i] LT", lastWeek: "dddd [whakamutunga i] LT", sameElse: "L" }, relativeTime: { future: "i roto i %s", past: "%s i mua", s: "te hēkona ruarua", m: "he meneti", mm: "%d meneti", h: "te haora", hh: "%d haora", d: "he ra", dd: "%d ra", M: "he marama", MM: "%d marama", y: "he tau", yy: "%d tau" }, ordinalParse: /\d{1,2}º/, ordinal: "%dº", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }),
    //! moment.js locale configuration
    //! locale : Macedonian [mk]
    //! author : Borislav Mickov : https://github.com/B0k0
    a.defineLocale("mk", {
        months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"), monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"), weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"), weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"), weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[Денес во] LT", nextDay: "[Утре во] LT", nextWeek: "[Во] dddd [во] LT", lastDay: "[Вчера во] LT", lastWeek: function () { switch (this.day()) { case 0: case 3: case 6: return "[Изминатата] dddd [во] LT"; case 1: case 2: case 4: case 5: return "[Изминатиот] dddd [во] LT" } }, sameElse: "L" }, relativeTime: { future: "после %s", past: "пред %s", s: "неколку секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дена", M: "месец", MM: "%d месеци", y: "година", yy: "%d години" }, ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/, ordinal: function (a) { var b = a % 10, c = a % 100; return 0 === a ? a + "-ев" : 0 === c ? a + "-ен" : c > 10 && c < 20 ? a + "-ти" : 1 === b ? a + "-ви" : 2 === b ? a + "-ри" : 7 === b || 8 === b ? a + "-ми" : a + "-ти" }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 7
        }
    }),
    //! moment.js locale configuration
    //! locale : Malayalam [ml]
    //! author : Floyd Pink : https://github.com/floydpink
    a.defineLocale("ml", { months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"), monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"), monthsParseExact: !0, weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"), weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"), weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"), longDateFormat: { LT: "A h:mm -നു", LTS: "A h:mm:ss -നു", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm -നു", LLLL: "dddd, D MMMM YYYY, A h:mm -നു" }, calendar: { sameDay: "[ഇന്ന്] LT", nextDay: "[നാളെ] LT", nextWeek: "dddd, LT", lastDay: "[ഇന്നലെ] LT", lastWeek: "[കഴിഞ്ഞ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s കഴിഞ്ഞ്", past: "%s മുൻപ്", s: "അൽപ നിമിഷങ്ങൾ", m: "ഒരു മിനിറ്റ്", mm: "%d മിനിറ്റ്", h: "ഒരു മണിക്കൂർ", hh: "%d മണിക്കൂർ", d: "ഒരു ദിവസം", dd: "%d ദിവസം", M: "ഒരു മാസം", MM: "%d മാസം", y: "ഒരു വർഷം", yy: "%d വർഷം" }, meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i, meridiemHour: function (a, b) { return 12 === a && (a = 0), "രാത്രി" === b && a >= 4 || "ഉച്ച കഴിഞ്ഞ്" === b || "വൈകുന്നേരം" === b ? a + 12 : a }, meridiem: function (a, b, c) { return a < 4 ? "രാത്രി" : a < 12 ? "രാവിലെ" : a < 17 ? "ഉച്ച കഴിഞ്ഞ്" : a < 20 ? "വൈകുന്നേരം" : "രാത്രി" } });
    //! moment.js locale configuration
    //! locale : Marathi [mr]
    //! author : Harshad Kale : https://github.com/kalehv
    //! author : Vivek Athalye : https://github.com/vnathalye
    var Sa = { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" }, Ta = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" }; a.defineLocale("mr", {
        months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"), monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"), monthsParseExact: !0, weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"), weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"), weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"), longDateFormat: { LT: "A h:mm वाजता", LTS: "A h:mm:ss वाजता", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm वाजता", LLLL: "dddd, D MMMM YYYY, A h:mm वाजता" }, calendar: { sameDay: "[आज] LT", nextDay: "[उद्या] LT", nextWeek: "dddd, LT", lastDay: "[काल] LT", lastWeek: "[मागील] dddd, LT", sameElse: "L" }, relativeTime: { future: "%sमध्ये", past: "%sपूर्वी", s: J, m: J, mm: J, h: J, hh: J, d: J, dd: J, M: J, MM: J, y: J, yy: J }, preparse: function (a) { return a.replace(/[१२३४५६७८९०]/g, function (a) { return Ta[a] }) }, postformat: function (a) { return a.replace(/\d/g, function (a) { return Sa[a] }) }, meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/, meridiemHour: function (a, b) { return 12 === a && (a = 0), "रात्री" === b ? a < 4 ? a : a + 12 : "सकाळी" === b ? a : "दुपारी" === b ? a >= 10 ? a : a + 12 : "सायंकाळी" === b ? a + 12 : void 0 }, meridiem: function (a, b, c) { return a < 4 ? "रात्री" : a < 10 ? "सकाळी" : a < 17 ? "दुपारी" : a < 20 ? "सायंकाळी" : "रात्री" }, week: {
            dow: 0,// Sunday is the first day of the week.
            doy: 6
        }
    }),
    //! moment.js locale configuration
    //! locale : Malay [ms-my]
    //! note : DEPRECATED, the correct one is [ms]
    //! author : Weldan Jamili : https://github.com/weldan
    a.defineLocale("ms-my", {
        months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|tengahari|petang|malam/, meridiemHour: function (a, b) { return 12 === a && (a = 0), "pagi" === b ? a : "tengahari" === b ? a >= 11 ? a : a + 12 : "petang" === b || "malam" === b ? a + 12 : void 0 }, meridiem: function (a, b, c) { return a < 11 ? "pagi" : a < 15 ? "tengahari" : a < 19 ? "petang" : "malam" }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 7
        }
    }),
    //! moment.js locale configuration
    //! locale : Malay [ms]
    //! author : Weldan Jamili : https://github.com/weldan
    a.defineLocale("ms", {
        months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|tengahari|petang|malam/, meridiemHour: function (a, b) { return 12 === a && (a = 0), "pagi" === b ? a : "tengahari" === b ? a >= 11 ? a : a + 12 : "petang" === b || "malam" === b ? a + 12 : void 0 }, meridiem: function (a, b, c) { return a < 11 ? "pagi" : a < 15 ? "tengahari" : a < 19 ? "petang" : "malam" }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 7
        }
    });
    //! moment.js locale configuration
    //! locale : Burmese [my]
    //! author : Squar team, mysquar.com
    //! author : David Rossellat : https://github.com/gholadr
    //! author : Tin Aung Lin : https://github.com/thanyawzinmin
    var Ua = { 1: "၁", 2: "၂", 3: "၃", 4: "၄", 5: "၅", 6: "၆", 7: "၇", 8: "၈", 9: "၉", 0: "၀" }, Va = { "၁": "1", "၂": "2", "၃": "3", "၄": "4", "၅": "5", "၆": "6", "၇": "7", "၈": "8", "၉": "9", "၀": "0" }; a.defineLocale("my", {
        months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"), monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"), weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"), weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"), weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[ယနေ.] LT [မှာ]", nextDay: "[မနက်ဖြန်] LT [မှာ]", nextWeek: "dddd LT [မှာ]", lastDay: "[မနေ.က] LT [မှာ]", lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]", sameElse: "L" }, relativeTime: { future: "လာမည့် %s မှာ", past: "လွန်ခဲ့သော %s က", s: "စက္ကန်.အနည်းငယ်", m: "တစ်မိနစ်", mm: "%d မိနစ်", h: "တစ်နာရီ", hh: "%d နာရီ", d: "တစ်ရက်", dd: "%d ရက်", M: "တစ်လ", MM: "%d လ", y: "တစ်နှစ်", yy: "%d နှစ်" }, preparse: function (a) { return a.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (a) { return Va[a] }) }, postformat: function (a) { return a.replace(/\d/g, function (a) { return Ua[a] }) }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }),
    //! moment.js locale configuration
    //! locale : Norwegian Bokmål [nb]
    //! authors : Espen Hovlandsdal : https://github.com/rexxars
    //!           Sigurd Gartmann : https://github.com/sigurdga
    a.defineLocale("nb", {
        months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"), monthsParseExact: !0, weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"), weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] HH:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[i går kl.] LT", lastWeek: "[forrige] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "noen sekunder", m: "ett minutt", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dager", M: "en måned", MM: "%d måneder", y: "ett år", yy: "%d år" }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    });
    //! moment.js locale configuration
    //! locale : Nepalese [ne]
    //! author : suvash : https://github.com/suvash
    var Wa = { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" }, Xa = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" }; a.defineLocale("ne", {
        months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"), monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"), monthsParseExact: !0, weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"), weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"), weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "Aको h:mm बजे", LTS: "Aको h:mm:ss बजे", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, Aको h:mm बजे", LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे" }, preparse: function (a) { return a.replace(/[१२३४५६७८९०]/g, function (a) { return Xa[a] }) }, postformat: function (a) { return a.replace(/\d/g, function (a) { return Wa[a] }) }, meridiemParse: /राति|बिहान|दिउँसो|साँझ/, meridiemHour: function (a, b) { return 12 === a && (a = 0), "राति" === b ? a < 4 ? a : a + 12 : "बिहान" === b ? a : "दिउँसो" === b ? a >= 10 ? a : a + 12 : "साँझ" === b ? a + 12 : void 0 }, meridiem: function (a, b, c) { return a < 3 ? "राति" : a < 12 ? "बिहान" : a < 16 ? "दिउँसो" : a < 20 ? "साँझ" : "राति" }, calendar: { sameDay: "[आज] LT", nextDay: "[भोलि] LT", nextWeek: "[आउँदो] dddd[,] LT", lastDay: "[हिजो] LT", lastWeek: "[गएको] dddd[,] LT", sameElse: "L" }, relativeTime: { future: "%sमा", past: "%s अगाडि", s: "केही क्षण", m: "एक मिनेट", mm: "%d मिनेट", h: "एक घण्टा", hh: "%d घण्टा", d: "एक दिन", dd: "%d दिन", M: "एक महिना", MM: "%d महिना", y: "एक बर्ष", yy: "%d बर्ष" }, week: {
            dow: 0,// Sunday is the first day of the week.
            doy: 6
        }
    });
    //! moment.js locale configuration
    //! locale : Dutch (Belgium) [nl-be]
    //! author : Joris Röling : https://github.com/jorisroling
    //! author : Jacob Middag : https://github.com/middagj
    var Ya = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"), Za = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"), $a = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i], _a = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i; a.defineLocale("nl-be", {
        months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: function (a, b) { return /-MMM-/.test(b) ? Za[a.month()] : Ya[a.month()] }, monthsRegex: _a, monthsShortRegex: _a, monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i, monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i, monthsParse: $a, longMonthsParse: $a, shortMonthsParse: $a, weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", m: "één minuut", mm: "%d minuten", h: "één uur", hh: "%d uur", d: "één dag", dd: "%d dagen", M: "één maand", MM: "%d maanden", y: "één jaar", yy: "%d jaar" }, ordinalParse: /\d{1,2}(ste|de)/, ordinal: function (a) { return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de") }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    });
    //! moment.js locale configuration
    //! locale : Dutch [nl]
    //! author : Joris Röling : https://github.com/jorisroling
    //! author : Jacob Middag : https://github.com/middagj
    var ab = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"), bb = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"), cb = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i], db = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i; a.defineLocale("nl", {
        months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: function (a, b) { return /-MMM-/.test(b) ? bb[a.month()] : ab[a.month()] }, monthsRegex: db, monthsShortRegex: db, monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i, monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i, monthsParse: cb, longMonthsParse: cb, shortMonthsParse: cb, weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", m: "één minuut", mm: "%d minuten", h: "één uur", hh: "%d uur", d: "één dag", dd: "%d dagen", M: "één maand", MM: "%d maanden", y: "één jaar", yy: "%d jaar" }, ordinalParse: /\d{1,2}(ste|de)/, ordinal: function (a) { return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de") }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }),
    //! moment.js locale configuration
    //! locale : Nynorsk [nn]
    //! author : https://github.com/mechuwind
    a.defineLocale("nn", {
        months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"), weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"), weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[I dag klokka] LT", nextDay: "[I morgon klokka] LT", nextWeek: "dddd [klokka] LT", lastDay: "[I går klokka] LT", lastWeek: "[Føregåande] dddd [klokka] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s sidan", s: "nokre sekund", m: "eit minutt", mm: "%d minutt", h: "ein time", hh: "%d timar", d: "ein dag", dd: "%d dagar", M: "ein månad", MM: "%d månader", y: "eit år", yy: "%d år" }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    });
    //! moment.js locale configuration
    //! locale : Punjabi (India) [pa-in]
    //! author : Harpreet Singh : https://github.com/harpreetkhalsagtbit
    var eb = { 1: "੧", 2: "੨", 3: "੩", 4: "੪", 5: "੫", 6: "੬", 7: "੭", 8: "੮", 9: "੯", 0: "੦" }, fb = { "੧": "1", "੨": "2", "੩": "3", "੪": "4", "੫": "5", "੬": "6", "੭": "7", "੮": "8", "੯": "9", "੦": "0" }; a.defineLocale("pa-in", {
        // There are months name as per Nanakshahi Calender but they are not used as rigidly in modern Punjabi.
        months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"), monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"), weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"), weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"), weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"), longDateFormat: { LT: "A h:mm ਵਜੇ", LTS: "A h:mm:ss ਵਜੇ", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm ਵਜੇ", LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ" }, calendar: { sameDay: "[ਅਜ] LT", nextDay: "[ਕਲ] LT", nextWeek: "dddd, LT", lastDay: "[ਕਲ] LT", lastWeek: "[ਪਿਛਲੇ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s ਵਿੱਚ", past: "%s ਪਿਛਲੇ", s: "ਕੁਝ ਸਕਿੰਟ", m: "ਇਕ ਮਿੰਟ", mm: "%d ਮਿੰਟ", h: "ਇੱਕ ਘੰਟਾ", hh: "%d ਘੰਟੇ", d: "ਇੱਕ ਦਿਨ", dd: "%d ਦਿਨ", M: "ਇੱਕ ਮਹੀਨਾ", MM: "%d ਮਹੀਨੇ", y: "ਇੱਕ ਸਾਲ", yy: "%d ਸਾਲ" }, preparse: function (a) { return a.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (a) { return fb[a] }) }, postformat: function (a) { return a.replace(/\d/g, function (a) { return eb[a] }) },
        // Punjabi notation for meridiems are quite fuzzy in practice. While there exists
        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Punjabi.
        meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/, meridiemHour: function (a, b) { return 12 === a && (a = 0), "ਰਾਤ" === b ? a < 4 ? a : a + 12 : "ਸਵੇਰ" === b ? a : "ਦੁਪਹਿਰ" === b ? a >= 10 ? a : a + 12 : "ਸ਼ਾਮ" === b ? a + 12 : void 0 }, meridiem: function (a, b, c) { return a < 4 ? "ਰਾਤ" : a < 10 ? "ਸਵੇਰ" : a < 17 ? "ਦੁਪਹਿਰ" : a < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ" }, week: {
            dow: 0,// Sunday is the first day of the week.
            doy: 6
        }
    });
    //! moment.js locale configuration
    //! locale : Polish [pl]
    //! author : Rafal Hirsz : https://github.com/evoL
    var gb = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), hb = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"); a.defineLocale("pl", {
        months: function (a, b) { return "" === b ? "(" + hb[a.month()] + "|" + gb[a.month()] + ")" : /D MMMM/.test(b) ? hb[a.month()] : gb[a.month()] }, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Dziś o] LT", nextDay: "[Jutro o] LT", nextWeek: "[W] dddd [o] LT", lastDay: "[Wczoraj o] LT", lastWeek: function () { switch (this.day()) { case 0: return "[W zeszłą niedzielę o] LT"; case 3: return "[W zeszłą środę o] LT"; case 6: return "[W zeszłą sobotę o] LT"; default: return "[W zeszły] dddd [o] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: L, mm: L, h: L, hh: L, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: L, y: "rok", yy: L }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }),
    //! moment.js locale configuration
    //! locale : Portuguese (Brazil) [pt-br]
    //! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira
    a.defineLocale("pt-br", {
        months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"), weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"), weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"), weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [às] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm" }, calendar: {
            sameDay: "[Hoje às] LT", nextDay: "[Amanhã às] LT", nextWeek: "dddd [às] LT", lastDay: "[Ontem às] LT", lastWeek: function () {// Saturday + Sunday
                return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
            }, sameElse: "L"
        }, relativeTime: { future: "em %s", past: "%s atrás", s: "poucos segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" }, ordinalParse: /\d{1,2}º/, ordinal: "%dº"
    }),
    //! moment.js locale configuration
    //! locale : Portuguese [pt]
    //! author : Jefferson : https://github.com/jalex79
    a.defineLocale("pt", {
        months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"), weekdays: "Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"), weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"), weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm" }, calendar: {
            sameDay: "[Hoje às] LT", nextDay: "[Amanhã às] LT", nextWeek: "dddd [às] LT", lastDay: "[Ontem às] LT", lastWeek: function () {// Saturday + Sunday
                return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
            }, sameElse: "L"
        }, relativeTime: { future: "em %s", past: "há %s", s: "segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" }, ordinalParse: /\d{1,2}º/, ordinal: "%dº", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }), a.defineLocale("ro", {
        months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"), monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"), weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"), weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[azi la] LT", nextDay: "[mâine la] LT", nextWeek: "dddd [la] LT", lastDay: "[ieri la] LT", lastWeek: "[fosta] dddd [la] LT", sameElse: "L" }, relativeTime: { future: "peste %s", past: "%s în urmă", s: "câteva secunde", m: "un minut", mm: M, h: "o oră", hh: M, d: "o zi", dd: M, M: "o lună", MM: M, y: "un an", yy: M }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 7
        }
    }); var ib = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
    // http://new.gramota.ru/spravka/rules/139-prop : § 103
    // Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
    // CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
    a.defineLocale("ru", {
        months: { format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"), standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_") }, monthsShort: {
            // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку ?
            format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"), standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
        }, weekdays: { standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"), format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"), isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/ }, weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"), weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"), monthsParse: ib, longMonthsParse: ib, shortMonthsParse: ib,
        // полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
        monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        // копия предыдущего
        monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        // полные названия с падежами
        monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
        // Выражение, которое соотвествует только сокращённым формам
        monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., HH:mm", LLLL: "dddd, D MMMM YYYY г., HH:mm" }, calendar: { sameDay: "[Сегодня в] LT", nextDay: "[Завтра в] LT", lastDay: "[Вчера в] LT", nextWeek: function (a) { if (a.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT"; switch (this.day()) { case 0: return "[В следующее] dddd [в] LT"; case 1: case 2: case 4: return "[В следующий] dddd [в] LT"; case 3: case 5: case 6: return "[В следующую] dddd [в] LT" } }, lastWeek: function (a) { if (a.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT"; switch (this.day()) { case 0: return "[В прошлое] dddd [в] LT"; case 1: case 2: case 4: return "[В прошлый] dddd [в] LT"; case 3: case 5: case 6: return "[В прошлую] dddd [в] LT" } }, sameElse: "L" }, relativeTime: { future: "через %s", past: "%s назад", s: "несколько секунд", m: O, mm: O, h: "час", hh: O, d: "день", dd: O, M: "месяц", MM: O, y: "год", yy: O }, meridiemParse: /ночи|утра|дня|вечера/i, isPM: function (a) { return /^(дня|вечера)$/.test(a) }, meridiem: function (a, b, c) { return a < 4 ? "ночи" : a < 12 ? "утра" : a < 17 ? "дня" : "вечера" }, ordinalParse: /\d{1,2}-(й|го|я)/, ordinal: function (a, b) { switch (b) { case "M": case "d": case "DDD": return a + "-й"; case "D": return a + "-го"; case "w": case "W": return a + "-я"; default: return a } }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 7
        }
    }),
    //! moment.js locale configuration
    //! locale : Northern Sami [se]
    //! authors : Bård Rolstad Henriksen : https://github.com/karamell
    a.defineLocale("se", {
        months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"), monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"), weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"), weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"), weekdaysMin: "s_v_m_g_d_b_L".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "MMMM D. [b.] YYYY", LLL: "MMMM D. [b.] YYYY [ti.] HH:mm", LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm" }, calendar: { sameDay: "[otne ti] LT", nextDay: "[ihttin ti] LT", nextWeek: "dddd [ti] LT", lastDay: "[ikte ti] LT", lastWeek: "[ovddit] dddd [ti] LT", sameElse: "L" }, relativeTime: { future: "%s geažes", past: "maŋit %s", s: "moadde sekunddat", m: "okta minuhta", mm: "%d minuhtat", h: "okta diimmu", hh: "%d diimmut", d: "okta beaivi", dd: "%d beaivvit", M: "okta mánnu", MM: "%d mánut", y: "okta jahki", yy: "%d jagit" }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }),
    //! moment.js locale configuration
    //! locale : Sinhalese [si]
    //! author : Sampath Sitinamaluwa : https://github.com/sampathsris
    /*jshint -W100*/
    a.defineLocale("si", { months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"), monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"), weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"), weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"), weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "a h:mm", LTS: "a h:mm:ss", L: "YYYY/MM/DD", LL: "YYYY MMMM D", LLL: "YYYY MMMM D, a h:mm", LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss" }, calendar: { sameDay: "[අද] LT[ට]", nextDay: "[හෙට] LT[ට]", nextWeek: "dddd LT[ට]", lastDay: "[ඊයේ] LT[ට]", lastWeek: "[පසුගිය] dddd LT[ට]", sameElse: "L" }, relativeTime: { future: "%sකින්", past: "%sකට පෙර", s: "තත්පර කිහිපය", m: "මිනිත්තුව", mm: "මිනිත්තු %d", h: "පැය", hh: "පැය %d", d: "දිනය", dd: "දින %d", M: "මාසය", MM: "මාස %d", y: "වසර", yy: "වසර %d" }, ordinalParse: /\d{1,2} වැනි/, ordinal: function (a) { return a + " වැනි" }, meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./, isPM: function (a) { return "ප.ව." === a || "පස් වරු" === a }, meridiem: function (a, b, c) { return a > 11 ? c ? "ප.ව." : "පස් වරු" : c ? "පෙ.ව." : "පෙර වරු" } });
    //! moment.js locale configuration
    //! locale : Slovak [sk]
    //! author : Martin Minka : https://github.com/k2s
    //! based on work of petrbela : https://github.com/petrbela
    var jb = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"), kb = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"); a.defineLocale("sk", {
        months: jb, monthsShort: kb, weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"), weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"), weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm" }, calendar: { sameDay: "[dnes o] LT", nextDay: "[zajtra o] LT", nextWeek: function () { switch (this.day()) { case 0: return "[v nedeľu o] LT"; case 1: case 2: return "[v] dddd [o] LT"; case 3: return "[v stredu o] LT"; case 4: return "[vo štvrtok o] LT"; case 5: return "[v piatok o] LT"; case 6: return "[v sobotu o] LT" } }, lastDay: "[včera o] LT", lastWeek: function () { switch (this.day()) { case 0: return "[minulú nedeľu o] LT"; case 1: case 2: return "[minulý] dddd [o] LT"; case 3: return "[minulú stredu o] LT"; case 4: case 5: return "[minulý] dddd [o] LT"; case 6: return "[minulú sobotu o] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "pred %s", s: Q, m: Q, mm: Q, h: Q, hh: Q, d: Q, dd: Q, M: Q, MM: Q, y: Q, yy: Q }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }), a.defineLocale("sl", {
        months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"), weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"), weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danes ob] LT", nextDay: "[jutri ob] LT", nextWeek: function () { switch (this.day()) { case 0: return "[v] [nedeljo] [ob] LT"; case 3: return "[v] [sredo] [ob] LT"; case 6: return "[v] [soboto] [ob] LT"; case 1: case 2: case 4: case 5: return "[v] dddd [ob] LT" } }, lastDay: "[včeraj ob] LT", lastWeek: function () { switch (this.day()) { case 0: return "[prejšnjo] [nedeljo] [ob] LT"; case 3: return "[prejšnjo] [sredo] [ob] LT"; case 6: return "[prejšnjo] [soboto] [ob] LT"; case 1: case 2: case 4: case 5: return "[prejšnji] dddd [ob] LT" } }, sameElse: "L" }, relativeTime: { future: "čez %s", past: "pred %s", s: R, m: R, mm: R, h: R, hh: R, d: R, dd: R, M: R, MM: R, y: R, yy: R }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 7
        }
    }),
    //! moment.js locale configuration
    //! locale : Albanian [sq]
    //! author : Flakërim Ismani : https://github.com/flakerimi
    //! author : Menelion Elensúle : https://github.com/Oire
    //! author : Oerd Cukalla : https://github.com/oerd
    a.defineLocale("sq", {
        months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"), monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"), weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"), weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"), weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"), weekdaysParseExact: !0, meridiemParse: /PD|MD/, isPM: function (a) { return "M" === a.charAt(0) }, meridiem: function (a, b, c) { return a < 12 ? "PD" : "MD" }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Sot në] LT", nextDay: "[Nesër në] LT", nextWeek: "dddd [në] LT", lastDay: "[Dje në] LT", lastWeek: "dddd [e kaluar në] LT", sameElse: "L" }, relativeTime: { future: "në %s", past: "%s më parë", s: "disa sekonda", m: "një minutë", mm: "%d minuta", h: "një orë", hh: "%d orë", d: "një ditë", dd: "%d ditë", M: "një muaj", MM: "%d muaj", y: "një vit", yy: "%d vite" }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    });
    //! moment.js locale configuration
    //! locale : Serbian Cyrillic [sr-cyrl]
    //! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j
    var lb = {
        words: {//Different grammatical cases
            m: ["један минут", "једне минуте"], mm: ["минут", "минуте", "минута"], h: ["један сат", "једног сата"], hh: ["сат", "сата", "сати"], dd: ["дан", "дана", "дана"], MM: ["месец", "месеца", "месеци"], yy: ["година", "године", "година"]
        }, correctGrammaticalCase: function (a, b) { return 1 === a ? b[0] : a >= 2 && a <= 4 ? b[1] : b[2] }, translate: function (a, b, c) { var d = lb.words[c]; return 1 === c.length ? b ? d[0] : d[1] : a + " " + lb.correctGrammaticalCase(a, d) }
    }; a.defineLocale("sr-cyrl", {
        months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"), monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"), monthsParseExact: !0, weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"), weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"), weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[данас у] LT", nextDay: "[сутра у] LT", nextWeek: function () { switch (this.day()) { case 0: return "[у] [недељу] [у] LT"; case 3: return "[у] [среду] [у] LT"; case 6: return "[у] [суботу] [у] LT"; case 1: case 2: case 4: case 5: return "[у] dddd [у] LT" } }, lastDay: "[јуче у] LT", lastWeek: function () { var a = ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"]; return a[this.day()] }, sameElse: "L" }, relativeTime: { future: "за %s", past: "пре %s", s: "неколико секунди", m: lb.translate, mm: lb.translate, h: lb.translate, hh: lb.translate, d: "дан", dd: lb.translate, M: "месец", MM: lb.translate, y: "годину", yy: lb.translate }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 7
        }
    });
    //! moment.js locale configuration
    //! locale : Serbian [sr]
    //! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j
    var mb = {
        words: {//Different grammatical cases
            m: ["jedan minut", "jedne minute"], mm: ["minut", "minute", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mesec", "meseca", "meseci"], yy: ["godina", "godine", "godina"]
        }, correctGrammaticalCase: function (a, b) { return 1 === a ? b[0] : a >= 2 && a <= 4 ? b[1] : b[2] }, translate: function (a, b, c) { var d = mb.words[c]; return 1 === c.length ? b ? d[0] : d[1] : a + " " + mb.correctGrammaticalCase(a, d) }
    }; a.defineLocale("sr", {
        months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"), monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () { switch (this.day()) { case 0: return "[u] [nedelju] [u] LT"; case 3: return "[u] [sredu] [u] LT"; case 6: return "[u] [subotu] [u] LT"; case 1: case 2: case 4: case 5: return "[u] dddd [u] LT" } }, lastDay: "[juče u] LT", lastWeek: function () { var a = ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"]; return a[this.day()] }, sameElse: "L" }, relativeTime: { future: "za %s", past: "pre %s", s: "nekoliko sekundi", m: mb.translate, mm: mb.translate, h: mb.translate, hh: mb.translate, d: "dan", dd: mb.translate, M: "mesec", MM: mb.translate, y: "godinu", yy: mb.translate }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 7
        }
    }),
    //! moment.js locale configuration
    //! locale : siSwati [ss]
    //! author : Nicolai Davies<mail@nicolai.io> : https://github.com/nicolaidavies
    a.defineLocale("ss", {
        months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"), monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"), weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"), weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"), weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Namuhla nga] LT", nextDay: "[Kusasa nga] LT", nextWeek: "dddd [nga] LT", lastDay: "[Itolo nga] LT", lastWeek: "dddd [leliphelile] [nga] LT", sameElse: "L" }, relativeTime: { future: "nga %s", past: "wenteka nga %s", s: "emizuzwana lomcane", m: "umzuzu", mm: "%d emizuzu", h: "lihora", hh: "%d emahora", d: "lilanga", dd: "%d emalanga", M: "inyanga", MM: "%d tinyanga", y: "umnyaka", yy: "%d iminyaka" }, meridiemParse: /ekuseni|emini|entsambama|ebusuku/, meridiem: function (a, b, c) { return a < 11 ? "ekuseni" : a < 15 ? "emini" : a < 19 ? "entsambama" : "ebusuku" }, meridiemHour: function (a, b) { return 12 === a && (a = 0), "ekuseni" === b ? a : "emini" === b ? a >= 11 ? a : a + 12 : "entsambama" === b || "ebusuku" === b ? 0 === a ? 0 : a + 12 : void 0 }, ordinalParse: /\d{1,2}/, ordinal: "%d", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }),
    //! moment.js locale configuration
    //! locale : Swedish [sv]
    //! author : Jens Alm : https://github.com/ulmus
    a.defineLocale("sv", {
        months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"), weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"), weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [kl.] HH:mm", LLLL: "dddd D MMMM YYYY [kl.] HH:mm", lll: "D MMM YYYY HH:mm", llll: "ddd D MMM YYYY HH:mm" }, calendar: { sameDay: "[Idag] LT", nextDay: "[Imorgon] LT", lastDay: "[Igår] LT", nextWeek: "[På] dddd LT", lastWeek: "[I] dddd[s] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "för %s sedan", s: "några sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en månad", MM: "%d månader", y: "ett år", yy: "%d år" }, ordinalParse: /\d{1,2}(e|a)/, ordinal: function (a) { var b = a % 10, c = 1 === ~~(a % 100 / 10) ? "e" : 1 === b ? "a" : 2 === b ? "a" : "e"; return a + c }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }),
    //! moment.js locale configuration
    //! locale : Swahili [sw]
    //! author : Fahad Kassim : https://github.com/fadsel
    a.defineLocale("sw", {
        months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"), weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"), weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"), weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[leo saa] LT", nextDay: "[kesho saa] LT", nextWeek: "[wiki ijayo] dddd [saat] LT", lastDay: "[jana] LT", lastWeek: "[wiki iliyopita] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s baadaye", past: "tokea %s", s: "hivi punde", m: "dakika moja", mm: "dakika %d", h: "saa limoja", hh: "masaa %d", d: "siku moja", dd: "masiku %d", M: "mwezi mmoja", MM: "miezi %d", y: "mwaka mmoja", yy: "miaka %d" }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 7
        }
    });
    //! moment.js locale configuration
    //! locale : Tamil [ta]
    //! author : Arjunkumar Krishnamoorthy : https://github.com/tk120404
    var nb = { 1: "௧", 2: "௨", 3: "௩", 4: "௪", 5: "௫", 6: "௬", 7: "௭", 8: "௮", 9: "௯", 0: "௦" }, ob = { "௧": "1", "௨": "2", "௩": "3", "௪": "4", "௫": "5", "௬": "6", "௭": "7", "௮": "8", "௯": "9", "௦": "0" }; a.defineLocale("ta", {
        months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"), weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"), weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, HH:mm", LLLL: "dddd, D MMMM YYYY, HH:mm" }, calendar: { sameDay: "[இன்று] LT", nextDay: "[நாளை] LT", nextWeek: "dddd, LT", lastDay: "[நேற்று] LT", lastWeek: "[கடந்த வாரம்] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s இல்", past: "%s முன்", s: "ஒரு சில விநாடிகள்", m: "ஒரு நிமிடம்", mm: "%d நிமிடங்கள்", h: "ஒரு மணி நேரம்", hh: "%d மணி நேரம்", d: "ஒரு நாள்", dd: "%d நாட்கள்", M: "ஒரு மாதம்", MM: "%d மாதங்கள்", y: "ஒரு வருடம்", yy: "%d ஆண்டுகள்" }, ordinalParse: /\d{1,2}வது/, ordinal: function (a) { return a + "வது" }, preparse: function (a) { return a.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (a) { return ob[a] }) }, postformat: function (a) { return a.replace(/\d/g, function (a) { return nb[a] }) },
        // refer http://ta.wikipedia.org/s/1er1
        meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/, meridiem: function (a, b, c) { return a < 2 ? " யாமம்" : a < 6 ? " வைகறை" : a < 10 ? " காலை" : a < 14 ? " நண்பகல்" : a < 18 ? " எற்பாடு" : a < 22 ? " மாலை" : " யாமம்" }, meridiemHour: function (a, b) { return 12 === a && (a = 0), "யாமம்" === b ? a < 2 ? a : a + 12 : "வைகறை" === b || "காலை" === b ? a : "நண்பகல்" === b && a >= 10 ? a : a + 12 }, week: {
            dow: 0,// Sunday is the first day of the week.
            doy: 6
        }
    }),
    //! moment.js locale configuration
    //! locale : Telugu [te]
    //! author : Krishna Chaitanya Thota : https://github.com/kcthota
    a.defineLocale("te", {
        months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"), monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"), monthsParseExact: !0, weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"), weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"), weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[నేడు] LT", nextDay: "[రేపు] LT", nextWeek: "dddd, LT", lastDay: "[నిన్న] LT", lastWeek: "[గత] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s లో", past: "%s క్రితం", s: "కొన్ని క్షణాలు", m: "ఒక నిమిషం", mm: "%d నిమిషాలు", h: "ఒక గంట", hh: "%d గంటలు", d: "ఒక రోజు", dd: "%d రోజులు", M: "ఒక నెల", MM: "%d నెలలు", y: "ఒక సంవత్సరం", yy: "%d సంవత్సరాలు" }, ordinalParse: /\d{1,2}వ/, ordinal: "%dవ", meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/, meridiemHour: function (a, b) { return 12 === a && (a = 0), "రాత్రి" === b ? a < 4 ? a : a + 12 : "ఉదయం" === b ? a : "మధ్యాహ్నం" === b ? a >= 10 ? a : a + 12 : "సాయంత్రం" === b ? a + 12 : void 0 }, meridiem: function (a, b, c) { return a < 4 ? "రాత్రి" : a < 10 ? "ఉదయం" : a < 17 ? "మధ్యాహ్నం" : a < 20 ? "సాయంత్రం" : "రాత్రి" }, week: {
            dow: 0,// Sunday is the first day of the week.
            doy: 6
        }
    }),
    //! moment.js locale configuration
    //! locale : Tetun Dili (East Timor) [tet]
    //! author : Joshua Brooks : https://github.com/joshbrooks
    //! author : Onorio De J. Afonso : https://github.com/marobo
    a.defineLocale("tet", {
        months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juniu_Juliu_Augustu_Setembru_Outubru_Novembru_Dezembru".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Aug_Set_Out_Nov_Dez".split("_"), weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sexta_Sabadu".split("_"), weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sext_Sab".split("_"), weekdaysMin: "Do_Seg_Te_Ku_Ki_Sex_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Ohin iha] LT", nextDay: "[Aban iha] LT", nextWeek: "dddd [iha] LT", lastDay: "[Horiseik iha] LT", lastWeek: "dddd [semana kotuk] [iha] LT", sameElse: "L" }, relativeTime: { future: "iha %s", past: "%s liuba", s: "minutu balun", m: "minutu ida", mm: "minutus %d", h: "horas ida", hh: "horas %d", d: "loron ida", dd: "loron %d", M: "fulan ida", MM: "fulan %d", y: "tinan ida", yy: "tinan %d" }, ordinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function (a) { var b = a % 10, c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th"; return a + c }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }),
    //! moment.js locale configuration
    //! locale : Thai [th]
    //! author : Kridsada Thanabulpong : https://github.com/sirn
    a.defineLocale("th", {
        months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"), monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"), monthsParseExact: !0, weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"), weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),// yes, three characters difference
        weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "YYYY/MM/DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY เวลา H:mm", LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm" }, meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/, isPM: function (a) { return "หลังเที่ยง" === a }, meridiem: function (a, b, c) { return a < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง" }, calendar: { sameDay: "[วันนี้ เวลา] LT", nextDay: "[พรุ่งนี้ เวลา] LT", nextWeek: "dddd[หน้า เวลา] LT", lastDay: "[เมื่อวานนี้ เวลา] LT", lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT", sameElse: "L" }, relativeTime: { future: "อีก %s", past: "%sที่แล้ว", s: "ไม่กี่วินาที", m: "1 นาที", mm: "%d นาที", h: "1 ชั่วโมง", hh: "%d ชั่วโมง", d: "1 วัน", dd: "%d วัน", M: "1 เดือน", MM: "%d เดือน", y: "1 ปี", yy: "%d ปี" }
    }),
    //! moment.js locale configuration
    //! locale : Tagalog (Philippines) [tl-ph]
    //! author : Dan Hagman : https://github.com/hagmandan
    a.defineLocale("tl-ph", {
        months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"), monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"), weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"), weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"), weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "MM/D/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY HH:mm", LLLL: "dddd, MMMM DD, YYYY HH:mm" }, calendar: { sameDay: "LT [ngayong araw]", nextDay: "[Bukas ng] LT", nextWeek: "LT [sa susunod na] dddd", lastDay: "LT [kahapon]", lastWeek: "LT [noong nakaraang] dddd", sameElse: "L" }, relativeTime: { future: "sa loob ng %s", past: "%s ang nakalipas", s: "ilang segundo", m: "isang minuto", mm: "%d minuto", h: "isang oras", hh: "%d oras", d: "isang araw", dd: "%d araw", M: "isang buwan", MM: "%d buwan", y: "isang taon", yy: "%d taon" }, ordinalParse: /\d{1,2}/, ordinal: function (a) { return a }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    });
    //! moment.js locale configuration
    //! locale : Klingon [tlh]
    //! author : Dominika Kruk : https://github.com/amaranthrose
    var pb = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_"); a.defineLocale("tlh", {
        months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"), monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"), monthsParseExact: !0, weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[DaHjaj] LT", nextDay: "[wa’leS] LT", nextWeek: "LLL", lastDay: "[wa’Hu’] LT", lastWeek: "LLL", sameElse: "L" }, relativeTime: { future: S, past: T, s: "puS lup", m: "wa’ tup", mm: U, h: "wa’ rep", hh: U, d: "wa’ jaj", dd: U, M: "wa’ jar", MM: U, y: "wa’ DIS", yy: U }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    });
    //! moment.js locale configuration
    //! locale : Turkish [tr]
    //! authors : Erhan Gundogan : https://github.com/erhangundogan,
    //!           Burak Yiğit Kaya: https://github.com/BYK
    var qb = { 1: "'inci", 5: "'inci", 8: "'inci", 70: "'inci", 80: "'inci", 2: "'nci", 7: "'nci", 20: "'nci", 50: "'nci", 3: "'üncü", 4: "'üncü", 100: "'üncü", 6: "'ncı", 9: "'uncu", 10: "'uncu", 30: "'uncu", 60: "'ıncı", 90: "'ıncı" };
    //! moment.js locale configuration
    //! locale : Talossan [tzl]
    //! author : Robin van der Vliet : https://github.com/robin0van0der0v
    //! author : Iustì Canun
    // After the year there should be a slash and the amount of years since December 26, 1979 in Roman numerals.
    // This is currently too difficult (maybe even impossible) to add.
    //! moment.js locale configuration
    //! locale : Central Atlas Tamazight Latin [tzm-latn]
    //! author : Abdel Said : https://github.com/abdelsaid
    //! moment.js locale configuration
    //! locale : Central Atlas Tamazight [tzm]
    //! author : Abdel Said : https://github.com/abdelsaid
    //! moment.js locale configuration
    //! locale : Uzbek [uz]
    //! author : Sardor Muminov : https://github.com/muminoff
    //! moment.js locale configuration
    //! locale : Vietnamese [vi]
    //! author : Bang Nguyen : https://github.com/bangnk
    //! moment.js locale configuration
    //! locale : Pseudo [x-pseudo]
    //! author : Andrew Hood : https://github.com/andrewhood125
    //! moment.js locale configuration
    //! locale : Yoruba Nigeria [yo]
    //! author : Atolagbe Abisoye : https://github.com/andela-batolagbe
    //! moment.js locale configuration
    //! locale : Chinese (China) [zh-cn]
    //! author : suupic : https://github.com/suupic
    //! author : Zeno Zeng : https://github.com/zenozeng
    //! moment.js locale configuration
    //! locale : Chinese (Hong Kong) [zh-hk]
    //! author : Ben : https://github.com/ben-lin
    //! author : Chris Lam : https://github.com/hehachris
    //! author : Konstantin : https://github.com/skfd
    //! moment.js locale configuration
    //! locale : Chinese (Taiwan) [zh-tw]
    //! author : Ben : https://github.com/ben-lin
    //! author : Chris Lam : https://github.com/hehachris
    return a.defineLocale("tr", {
        months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"), monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"), weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"), weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"), weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[bugün saat] LT", nextDay: "[yarın saat] LT", nextWeek: "[haftaya] dddd [saat] LT", lastDay: "[dün] LT", lastWeek: "[geçen hafta] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s sonra", past: "%s önce", s: "birkaç saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir yıl", yy: "%d yıl" }, ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/, ordinal: function (a) {
            if (0 === a)// special case for zero
                return a + "'ıncı"; var b = a % 10, c = a % 100 - b, d = a >= 100 ? 100 : null; return a + (qb[b] || qb[c] || qb[d])
        }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 7
        }
    }), a.defineLocale("tzl", {
        months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"), monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"), weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"), weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"), weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM [dallas] YYYY", LLL: "D. MMMM [dallas] YYYY HH.mm", LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm" }, meridiemParse: /d\'o|d\'a/i, isPM: function (a) { return "d'o" === a.toLowerCase() }, meridiem: function (a, b, c) { return a > 11 ? c ? "d'o" : "D'O" : c ? "d'a" : "D'A" }, calendar: { sameDay: "[oxhi à] LT", nextDay: "[demà à] LT", nextWeek: "dddd [à] LT", lastDay: "[ieiri à] LT", lastWeek: "[sür el] dddd [lasteu à] LT", sameElse: "L" }, relativeTime: { future: "osprei %s", past: "ja%s", s: W, m: W, mm: W, h: W, hh: W, d: W, dd: W, M: W, MM: W, y: W, yy: W }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }), a.defineLocale("tzm-latn", {
        months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"), monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"), weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[asdkh g] LT", nextDay: "[aska g] LT", nextWeek: "dddd [g] LT", lastDay: "[assant g] LT", lastWeek: "dddd [g] LT", sameElse: "L" }, relativeTime: { future: "dadkh s yan %s", past: "yan %s", s: "imik", m: "minuḍ", mm: "%d minuḍ", h: "saɛa", hh: "%d tassaɛin", d: "ass", dd: "%d ossan", M: "ayowr", MM: "%d iyyirn", y: "asgas", yy: "%d isgasn" }, week: {
            dow: 6,// Saturday is the first day of the week.
            doy: 12
        }
    }), a.defineLocale("tzm", {
        months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"), monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"), weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[ⴰⵙⴷⵅ ⴴ] LT", nextDay: "[ⴰⵙⴽⴰ ⴴ] LT", nextWeek: "dddd [ⴴ] LT", lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT", lastWeek: "dddd [ⴴ] LT", sameElse: "L" }, relativeTime: { future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s", past: "ⵢⴰⵏ %s", s: "ⵉⵎⵉⴽ", m: "ⵎⵉⵏⵓⴺ", mm: "%d ⵎⵉⵏⵓⴺ", h: "ⵙⴰⵄⴰ", hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ", d: "ⴰⵙⵙ", dd: "%d oⵙⵙⴰⵏ", M: "ⴰⵢoⵓⵔ", MM: "%d ⵉⵢⵢⵉⵔⵏ", y: "ⴰⵙⴳⴰⵙ", yy: "%d ⵉⵙⴳⴰⵙⵏ" }, week: {
            dow: 6,// Saturday is the first day of the week.
            doy: 12
        }
    }), a.defineLocale("uk", {
        months: { format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"), standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_") }, monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"), weekdays: Z, weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"), weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY р.", LLL: "D MMMM YYYY р., HH:mm", LLLL: "dddd, D MMMM YYYY р., HH:mm" }, calendar: { sameDay: $("[Сьогодні "), nextDay: $("[Завтра "), lastDay: $("[Вчора "), nextWeek: $("[У] dddd ["), lastWeek: function () { switch (this.day()) { case 0: case 3: case 5: case 6: return $("[Минулої] dddd [").call(this); case 1: case 2: case 4: return $("[Минулого] dddd [").call(this) } }, sameElse: "L" }, relativeTime: { future: "за %s", past: "%s тому", s: "декілька секунд", m: Y, mm: Y, h: "годину", hh: Y, d: "день", dd: Y, M: "місяць", MM: Y, y: "рік", yy: Y },
        // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
        meridiemParse: /ночі|ранку|дня|вечора/, isPM: function (a) { return /^(дня|вечора)$/.test(a) }, meridiem: function (a, b, c) { return a < 4 ? "ночі" : a < 12 ? "ранку" : a < 17 ? "дня" : "вечора" }, ordinalParse: /\d{1,2}-(й|го)/, ordinal: function (a, b) { switch (b) { case "M": case "d": case "DDD": case "w": case "W": return a + "-й"; case "D": return a + "-го"; default: return a } }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 7
        }
    }), a.defineLocale("uz", {
        months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"), monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"), weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"), weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"), weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, calendar: { sameDay: "[Бугун соат] LT [да]", nextDay: "[Эртага] LT [да]", nextWeek: "dddd [куни соат] LT [да]", lastDay: "[Кеча соат] LT [да]", lastWeek: "[Утган] dddd [куни соат] LT [да]", sameElse: "L" }, relativeTime: { future: "Якин %s ичида", past: "Бир неча %s олдин", s: "фурсат", m: "бир дакика", mm: "%d дакика", h: "бир соат", hh: "%d соат", d: "бир кун", dd: "%d кун", M: "бир ой", MM: "%d ой", y: "бир йил", yy: "%d йил" }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 7
        }
    }), a.defineLocale("vi", {
        months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"), monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"), monthsParseExact: !0, weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"), weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysParseExact: !0, meridiemParse: /sa|ch/i, isPM: function (a) { return /^ch$/i.test(a) }, meridiem: function (a, b, c) { return a < 12 ? c ? "sa" : "SA" : c ? "ch" : "CH" }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [năm] YYYY", LLL: "D MMMM [năm] YYYY HH:mm", LLLL: "dddd, D MMMM [năm] YYYY HH:mm", l: "DD/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, calendar: { sameDay: "[Hôm nay lúc] LT", nextDay: "[Ngày mai lúc] LT", nextWeek: "dddd [tuần tới lúc] LT", lastDay: "[Hôm qua lúc] LT", lastWeek: "dddd [tuần rồi lúc] LT", sameElse: "L" }, relativeTime: { future: "%s tới", past: "%s trước", s: "vài giây", m: "một phút", mm: "%d phút", h: "một giờ", hh: "%d giờ", d: "một ngày", dd: "%d ngày", M: "một tháng", MM: "%d tháng", y: "một năm", yy: "%d năm" }, ordinalParse: /\d{1,2}/, ordinal: function (a) { return a }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }), a.defineLocale("x-pseudo", {
        months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"), monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"), monthsParseExact: !0, weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"), weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"), weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[T~ódá~ý át] LT", nextDay: "[T~ómó~rró~w át] LT", nextWeek: "dddd [át] LT", lastDay: "[Ý~ést~érdá~ý át] LT", lastWeek: "[L~ást] dddd [át] LT", sameElse: "L" }, relativeTime: { future: "í~ñ %s", past: "%s á~gó", s: "á ~féw ~sécó~ñds", m: "á ~míñ~úté", mm: "%d m~íñú~tés", h: "á~ñ hó~úr", hh: "%d h~óúrs", d: "á ~dáý", dd: "%d d~áýs", M: "á ~móñ~th", MM: "%d m~óñt~hs", y: "á ~ýéár", yy: "%d ý~éárs" }, ordinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function (a) { var b = a % 10, c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th"; return a + c }, week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }), a.defineLocale("yo", {
        months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"), monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"), weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"), weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"), weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Ònì ni] LT", nextDay: "[Ọ̀la ni] LT", nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT", lastDay: "[Àna ni] LT", lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT", sameElse: "L" }, relativeTime: { future: "ní %s", past: "%s kọjá", s: "ìsẹjú aayá die", m: "ìsẹjú kan", mm: "ìsẹjú %d", h: "wákati kan", hh: "wákati %d", d: "ọjọ́ kan", dd: "ọjọ́ %d", M: "osù kan", MM: "osù %d", y: "ọdún kan", yy: "ọdún %d" }, ordinalParse: /ọjọ́\s\d{1,2}/, ordinal: "ọjọ́ %d", week: {
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }), a.defineLocale("zh-cn", {
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), longDateFormat: { LT: "Ah点mm分", LTS: "Ah点m分s秒", L: "YYYY-MM-DD", LL: "YYYY年MMMD日", LLL: "YYYY年MMMD日Ah点mm分", LLLL: "YYYY年MMMD日ddddAh点mm分", l: "YYYY-MM-DD", ll: "YYYY年MMMD日", lll: "YYYY年MMMD日Ah点mm分", llll: "YYYY年MMMD日ddddAh点mm分" }, meridiemParse: /凌晨|早上|上午|中午|下午|晚上/, meridiemHour: function (a, b) { return 12 === a && (a = 0), "凌晨" === b || "早上" === b || "上午" === b ? a : "下午" === b || "晚上" === b ? a + 12 : a >= 11 ? a : a + 12 }, meridiem: function (a, b, c) { var d = 100 * a + b; return d < 600 ? "凌晨" : d < 900 ? "早上" : d < 1130 ? "上午" : d < 1230 ? "中午" : d < 1800 ? "下午" : "晚上" }, calendar: { sameDay: function () { return 0 === this.minutes() ? "[今天]Ah[点整]" : "[今天]LT" }, nextDay: function () { return 0 === this.minutes() ? "[明天]Ah[点整]" : "[明天]LT" }, lastDay: function () { return 0 === this.minutes() ? "[昨天]Ah[点整]" : "[昨天]LT" }, nextWeek: function () { var b, c; return b = a().startOf("week"), c = this.diff(b, "days") >= 7 ? "[下]" : "[本]", 0 === this.minutes() ? c + "dddAh点整" : c + "dddAh点mm" }, lastWeek: function () { var b, c; return b = a().startOf("week"), c = this.unix() < b.unix() ? "[上]" : "[本]", 0 === this.minutes() ? c + "dddAh点整" : c + "dddAh点mm" }, sameElse: "LL" }, ordinalParse: /\d{1,2}(日|月|周)/, ordinal: function (a, b) { switch (b) { case "d": case "D": case "DDD": return a + "日"; case "M": return a + "月"; case "w": case "W": return a + "周"; default: return a } }, relativeTime: { future: "%s内", past: "%s前", s: "几秒", m: "1 分钟", mm: "%d 分钟", h: "1 小时", hh: "%d 小时", d: "1 天", dd: "%d 天", M: "1 个月", MM: "%d 个月", y: "1 年", yy: "%d 年" }, week: {
            // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
            dow: 1,// Monday is the first day of the week.
            doy: 4
        }
    }), a.defineLocale("zh-hk", { months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), longDateFormat: { LT: "Ah點mm分", LTS: "Ah點m分s秒", L: "YYYY年MMMD日", LL: "YYYY年MMMD日", LLL: "YYYY年MMMD日Ah點mm分", LLLL: "YYYY年MMMD日ddddAh點mm分", l: "YYYY年MMMD日", ll: "YYYY年MMMD日", lll: "YYYY年MMMD日Ah點mm分", llll: "YYYY年MMMD日ddddAh點mm分" }, meridiemParse: /凌晨|早上|上午|中午|下午|晚上/, meridiemHour: function (a, b) { return 12 === a && (a = 0), "凌晨" === b || "早上" === b || "上午" === b ? a : "中午" === b ? a >= 11 ? a : a + 12 : "下午" === b || "晚上" === b ? a + 12 : void 0 }, meridiem: function (a, b, c) { var d = 100 * a + b; return d < 600 ? "凌晨" : d < 900 ? "早上" : d < 1130 ? "上午" : d < 1230 ? "中午" : d < 1800 ? "下午" : "晚上" }, calendar: { sameDay: "[今天]LT", nextDay: "[明天]LT", nextWeek: "[下]ddddLT", lastDay: "[昨天]LT", lastWeek: "[上]ddddLT", sameElse: "L" }, ordinalParse: /\d{1,2}(日|月|週)/, ordinal: function (a, b) { switch (b) { case "d": case "D": case "DDD": return a + "日"; case "M": return a + "月"; case "w": case "W": return a + "週"; default: return a } }, relativeTime: { future: "%s內", past: "%s前", s: "幾秒", m: "1 分鐘", mm: "%d 分鐘", h: "1 小時", hh: "%d 小時", d: "1 天", dd: "%d 天", M: "1 個月", MM: "%d 個月", y: "1 年", yy: "%d 年" } }), a.defineLocale("zh-tw", { months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), longDateFormat: { LT: "Ah點mm分", LTS: "Ah點m分s秒", L: "YYYY年MMMD日", LL: "YYYY年MMMD日", LLL: "YYYY年MMMD日Ah點mm分", LLLL: "YYYY年MMMD日ddddAh點mm分", l: "YYYY年MMMD日", ll: "YYYY年MMMD日", lll: "YYYY年MMMD日Ah點mm分", llll: "YYYY年MMMD日ddddAh點mm分" }, meridiemParse: /凌晨|早上|上午|中午|下午|晚上/, meridiemHour: function (a, b) { return 12 === a && (a = 0), "凌晨" === b || "早上" === b || "上午" === b ? a : "中午" === b ? a >= 11 ? a : a + 12 : "下午" === b || "晚上" === b ? a + 12 : void 0 }, meridiem: function (a, b, c) { var d = 100 * a + b; return d < 600 ? "凌晨" : d < 900 ? "早上" : d < 1130 ? "上午" : d < 1230 ? "中午" : d < 1800 ? "下午" : "晚上" }, calendar: { sameDay: "[今天]LT", nextDay: "[明天]LT", nextWeek: "[下]ddddLT", lastDay: "[昨天]LT", lastWeek: "[上]ddddLT", sameElse: "L" }, ordinalParse: /\d{1,2}(日|月|週)/, ordinal: function (a, b) { switch (b) { case "d": case "D": case "DDD": return a + "日"; case "M": return a + "月"; case "w": case "W": return a + "週"; default: return a } }, relativeTime: { future: "%s內", past: "%s前", s: "幾秒", m: "1 分鐘", mm: "%d 分鐘", h: "1 小時", hh: "%d 小時", d: "1 天", dd: "%d 天", M: "1 個月", MM: "%d 個月", y: "1 年", yy: "%d 年" } }), a.locale("en"), a
});