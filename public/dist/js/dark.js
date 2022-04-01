const LOCAL_STORAGE_KEY = "toggle-bootstrap-theme"

const LOCAL_META_DATA = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))

// you can change this url as needed
const DARK_THEME_PATH = "/dist/css/style.css"
const LIGHT_THEME_PATH = "/dist/css/stylecopy.css"

const DARK_STYLE_LINK = document.getElementById("dark-theme-style")
const THEME_TOGGLER = document.getElementById("theme-toggler")

let isDark = LOCAL_META_DATA && LOCAL_META_DATA.isDark

// check if user has already selected dark theme earlier
// if (isDark) {
//     enableDarkTheme()
// } else {
//     disableDarkTheme()
// }

/**
 * Apart from toggling themes, this will also store user's theme preference in local storage.
 * So when user visits next time, we can load the same theme.
 *
 */
function toggleTheme() {
    isDark = !isDark
    // if (isDark) {
    //     enableDarkTheme()
    // } else {
    //     disableDarkTheme()
    // }
    const META = { isDark }
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(META))
    updateTheme()
}

function enableDarkTheme() {
    DARK_STYLE_LINK.setAttribute("href", DARK_THEME_PATH)
    THEME_TOGGLER.innerHTML = "🌙 Dark Mode"
}

function disableDarkTheme() {
    DARK_STYLE_LINK.setAttribute("href", LIGHT_THEME_PATH)
    THEME_TOGGLER.innerHTML = "🌞 Light Mode"
}


function updateTheme() {
    
        var data = { key: isDark }
        $.post("/dark", data, function (res) {
            console.log("Dark is called")
            if (isDark) {
                enableDarkTheme()
            } else {
                disableDarkTheme()
            }
            let links = document.getElementsByTagName("link")
            for (let i = 0; i < links.length; i++) {
                if (links[i].getAttribute("rel") == "stylesheet") {
                    let href = links[i].getAttribute("href").split("?")[0]
                    let newHref =
                        href + "?version=" + new Date().getMilliseconds()
                    console.log(newHref)
                    links[i].setAttribute("href", newHref)
                }
            }
        })
    
}