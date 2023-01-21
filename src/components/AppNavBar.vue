<script >
export default {

}
</script>

<template>
<div class="nav-bar">
    <nav>
    <div class="nav-bar">
        <section class="header-nav-bar">
            <!-- <img src="img/logo.svg" alt=""> -->
            <!-- <img src="img/logo-small.svg" alt="" class="logomobile"> -->
        </section>
        <section class="link-nav-bar">
            <a href=""><img src="" alt=""><span>Home</span></a>
            <a href=""><img src="" alt=""><span>Cerca</span></a>
            <a href=""><img src="" alt=""><span>La tua libreria</span></a>  
        </section>
        <h3>PLAYLIST</h3>
        <section class="features">
            <a href="">
                <span class="newplaylist">
                    <i class="fa-solid fa-square-plus"></i> Crea Playlist
                </span>
            </a>
        </section>
        <section class="listplaylist">
            <ul>
              <a href=""><li>Nome Playlist</li></a>
              <a href=""><li>Nome Playlist</li></a>
              <a href=""><li>Nome Playlist</li></a>
              <a href=""><li>Nome Playlist</li></a>
              <a href=""><li>Nome Playlist</li></a>
              <a href=""><li>Nome Playlist</li></a>
              <a href=""><li>Nome Playlist</li></a>
            </ul>
        </section>
    </div>
    <div class="footer-nav">
        <a href=""><i class="fa-regular fa-circle-down"></i><span> Installa App</span></a>
        <hr>
        <a href=""><img src="" alt=""> <span id="profilo">Jhon Doe</span></a>
    </div>
    </nav>
</div>
</template>

<style lang="scss">
.nav-bar{
    a{
        text-decoration: none;
    }
    width: 150px;
    min-height: 100vh;
    background: black;
    overflow: hidden;
    flex: 1;
    z-index: 1;
    position: fixed;
    left: 0;
    nav{
    width: 200px;
    background: black;
    height: calc(100vh - 100px);
    padding: 20px 20px 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    position: relative;
}
.nav-bar{
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-weight: bold;
    flex: 1;
}
.logomobile{
    width: 20px;
    display: none;
}
nav h3{
    color: white;
    padding-left: 10px;
}
.link-nav-bar{
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
}
.link-nav-bar img{
    width: 20px;
    filter: invert(44%) sepia(0%) saturate(209%) hue-rotate(189deg) brightness(97%) contrast(90%);
}
.link-nav-bar>a{
    display: flex;
    gap: 5px;
    color: #7A7A7A;
}
/* white only home */
.link-nav-bar > a:nth-child(1) > span:nth-child(2) {
    color: white;
}
    /* ----------------------- */
    /* white only home img */
.link-nav-bar > a:nth-child(1) > img:nth-child(1) {
        filter: invert(0%);
}
        /* ---------------------------- */
.link-nav-bar>a:hover{
    color: white;
    font-weight: bold;
}
.link-nav-bar>a:hover img{
    filter: invert(0%);
}
.listplaylist{
    overflow: auto;
    line-height: 30px;
    font-size: 13px;
    flex-shrink: 2;
    flex-basis: 9px;
    flex-grow: 1;
}
.newplaylist{
    color: #7A7A7A;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    gap: 10px;
    align-items: center;
}
.newplaylist>i{
    font-size: 30px;
}
.features>a:hover .newplaylist{
    color: white;
}

.listplaylist a{
    color: #7A7A7A;
}
nav a:hover{
    color: white;
}
.footer-nav{
    color: #7A7A7A;
    background-color: black;
    line-height: 40px;
}


#profilo{
    color: white;
    font-weight: bold;
    margin-top: 10px;
}
.footer-nav img{
    width: 20px;
    background-color: grey;
    border-radius: 40%;
}
}
</style>
