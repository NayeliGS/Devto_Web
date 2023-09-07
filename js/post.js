let id = window.location.search; //obtiene ' + post
console.log(id)
let postId = id.replace('?', ''); //obtiene puro post
console.log(postId);
document.addEventListener("DOMContentLoaded", () => {
    const postContainer = document.getElementById("main-container")
    const postRightContainer = document.getElementById("main-container-right")
    const postButtonEdit = document.getElementById("main-container-button-Edit")
    let postHtml = "";
    let postRigthHtml = "";
    let postHtmlButtonEdit = "";
    fetch(`http://localhost:3000/publicaciones/${postId}`)
    .then((response) => response.json())
    .then((publicacion) => {
        console.log(publicacion);
        postHtml = `
          <div class="mid__container_banner_container">
            <img
              class="mid__container_banner_container_banner"
              src="${publicacion.imagen}"
            />
          </div>
          <div class="mid__container_all">
            <div class="mid__container_all_title pe-sm-3 pt-sm-3 pe-sm3 ps-sm-3 pe-md-4 pt-md-4 ps-md-4 pe-xl-5 pt-xl-5 ps-xl-5">
              <div class="mid__container_all_title_name">
                <img
                  class="mid__container_all_title_name_img"
                  src="${publicacion.usuario.avatar}"
                  alt=""
                />
                <div class="mid__container_all_title_name_data">
                  <span class="mid__container_all_title_name_data_name"
                    >${publicacion.usuario.nombre} ${publicacion.usuario.apellido}</span
                  >
                  <span class="mid__container_all_title_name_data_date"
                    >${publicacion.fechaCreacion}</span
                  >
                </div>
              </div>
              <div class="mid__container_all_reacts">
                <div class="mid__container_all_reacts_cont">
                  <img src="./img/post/reac_heart.svg" alt="" /><span
                    >112</span
                  >
                </div>
                <div class="mid__container_all_reacts_cont">
                  <img src="./img/post/react_unicorn.svg" alt="" /><span
                    >8</span
                  >
                </div>
                <div class="mid__container_all_reacts_cont">
                  <img src="./img/post/react_explote.svg" alt="" /><span
                    >9</span
                  >
                </div>
                <div class="mid__container_all_reacts_cont">
                  <img src="./img/post/react_hands.svg" alt="" /><span
                    >11</span
                  >
                </div>
                <div class="mid__container_all_reacts_cont">
                  <img src="./img/post/react_fire.svg" alt="" /><span>7</span>
                </div>
              </div>
              <div class="mid__container_all_h1">
                <h1 id="H1_title">🔥${publicacion.titulo}</h1>
              </div>
              <div class="mid__container_all_hash">
                <a
                  href=""
                  class="mid__container_all_hash_items_purple box_size"
                >
                  <span class="mid__container_all_hash_items_purple_ha">#</span
                  ><span>webdev</span>
                </a>
                <a
                  href=""
                  class="mid__container_all_hash_items_drak_green box_size"
                >
                  <span class="mid__container_all_hash_items_drak_green_ha"
                    >#</span
                  ><span>beginners</span>
                </a>
                <a href="" class="mid__container_all_hash_items_blue box_size">
                  <span class="mid__container_all_hash_items_blue_ha">#</span
                  ><span>css</span>
                </a>
                <a href="" class="mid__container_all_hash_items_green box_size">
                  <span class="mid__container_all_hash_items_green_ha">#</span
                  ><span>tooling</span>
                </a>
              </div>
              <div class="mid__container_all_tools">
              <div class="mid__container_all_tools_cont">
                <div class="first mid__container_all_tools_cont_part">
                  <div class="mid__container_all_tools_cont_part_inside">
                    <span>Tools, Trends and Extenstions (8 Part Series)</span>
                  </div>
                </div>
                <div class="mid__container_all_tools_cont_part">
                  <div class="mid__container_all_tools_cont_part_inside">
                    <span
                      class="mid__container_all_tools_cont_part_inside_number"
                      ><span>1</span></span
                    >
                    <span>Juicy Tailwindcss Tools For Everyone</span>
                  </div>
                </div>
                <div class="mid__container_all_tools_cont_part">
                  <div class="mid__container_all_tools_cont_part_inside">
                    <span
                      class="mid__container_all_tools_cont_part_inside_number"
                      ><span>2</span></span
                    >
                    <span
                      >Project Management Tools To Boost Your
                      Productivity</span
                    >
                  </div>
                </div>
                <div class="mid__container_all_tools_cont_part">
                  <div class="mid__container_all_tools_cont_part_inside">
                    <span
                      class="mid__container_all_tools_cont_part_inside_number"
                      ><span>...</span></span
                    >
                    <span>4 more parts...</span>
                  </div>
                </div>
                <div class="mid__container_all_tools_cont_part">
                  <div class="mid__container_all_tools_cont_part_inside">
                    <span
                      class="mid__container_all_tools_cont_part_inside_number"
                      ><span>7</span></span
                    >
                    <span>AI Tools Like Chat GPT</span>
                  </div>
                </div>
                <div class="mid__container_all_tools_cont_part last">
                  <div class="mid__container_all_tools_cont_part_inside">
                    <span
                      class="mid__container_all_tools_cont_part_inside_number mid__container_all_tools_cont_part_inside_number_last"
                      ><span>8</span></span
                    >
                    <span>${publicacion.titulo}</span>
                  </div>
                </div>
              </div>
            </div>
          
              
              <div class="post_contenido">
              ${publicacion.contenido}
              </div>
            </div>
          </div>
          <div class="mid__container_comments">
            <div class="mid__container_comments_container">
              <div class="mid__container_comments_container_header">
                <div class="mid__container_comments_container_header_top">
                  <span
                    class="mid__container_comments_container_header_top_text"
                    >Top comments (1)</span
                  >
                  <div class="mid__container_comments_container_header_top_img">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      class="mt-2"
                    >
                      <title>Crown</title>
                      <path
                        d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <a
                  href=""
                  class="mid__container_comments_container_header_top_button"
                  ><span>Subscribe</span></a
                >
              </div>
              <div class="mid__container_comments_container_add_comment">
                <img
                  class="mid__container_comments_container_add_comment_photo"
                  src="${publicacion.usuario.avatar}"
                  alt=""
                />
                <textarea
                  class="mid__container_comments_container_add_comment_text_area"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div class="mid__container_comments_container_comment">
                <div class="mid__container_comments_container_comment_avatar">
                  <img
                    class="mid__container_comments_container_comment_avatar_img"
                    src="./img/post/comment.webp"
                    alt=""
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    role="img"
                    aria-labelledby="afn542xa4dmwidg7ng92ka3rvswb4nc9"
                    class="crayons-icon expanded"
                  >
                    <title id="afn542xa4dmwidg7ng92ka3rvswb4nc9">
                      Collapse
                    </title>
                    <path
                      d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"
                    ></path>
                  </svg>
                </div>
                <div class="mid__container_comments_container_comment_body">
                  <div
                    class="mid__container_comments_container_comment_body_name"
                  >
                    <div
                      class="mid__container_comments_container_comment_body_name_left"
                    >
                      <span
                        class="mid__container_comments_container_comment_body_name_left_name"
                        >Jon Snow</span
                      ><span
                        class="mid__container_comments_container_comment_body_name_left_date"
                      >
                        • 9 may</span
                      >
                    </div>
                    <div
                      class="mid__container_comments_container_comment_body_name_right"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        role="img"
                        aria-labelledby="ajw30gyz89zprvzlcfrgyn96uou4kob9"
                        class="crayons-icon pointer-events-none"
                      >
                        <title id="ajw30gyz89zprvzlcfrgyn96uou4kob9">
                          Dropdown menu
                        </title>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    class="mid__container_comments_container_comment_body_content"
                  >
                    <p>
                      Great Share<br />I have also created some free CSS tools.
                    </p>
                    <ol>
                      <li>Glassmorphism</li>
                      <li>Neumorphism</li>
                      <li>CSS Gradient</li>
                      <li>Instagram 3D Post Generator</li>
                    </ol>
                    <p>
                      If you want all these tools in one place, check out our
                      website.
                    </p>
                    <a href="">democoding.in/</a>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        `;

        postRigthHtml = ` 
        <div class="main__container_right_container">
          <div class="main__container_right_container_card">
            <div class="main__container_right_container_card_top_img"></div>

            <div class="card__container">
              <div class="main__container_right_container_card_name_cont">
                <img
                  class="main__container_right_container_card_name_cont_img"
                  src="${publicacion.usuario.avatar}"
                  alt=""
                />
                <span
                  class="main__container_right_container_card_name_cont_name"
                  >${publicacion.usuario.nombre} ${publicacion.usuario.apellido}</span
                >
              </div>
              <div class="main__container_right_container_card_button">
                <a
                  class="main__container_right_container_card_button_a"
                  href=""
                  ><span
                    class="main__container_right_container_card_button_a_txt"
                    >Follow</span
                  ></a
                >
              </div>
              <div class="main__container_right_container_card_desc">
                Hi there! My name is Arafat, and I am a new computer science
                student and full-stack freelancer. I am passionate about using
                technology to solve real-world problems and constantly
                learning.
              </div>
              <div class="main__container_right_container_card_data">
                <span class="main__container_right_container_card_data_title"
                  >LOCATION</span
                >
                <span class="main__container_right_container_card_data_desc"
                  >Stockholm, Swede</span
                >
              </div>
              <div class="main__container_right_container_card_data">
                <span class="main__container_right_container_card_data_title"
                  >EDUCATION</span
                >
                <span class="main__container_right_container_card_data_desc"
                  >Computer science</span
                >
              </div>
              <div class="main__container_right_container_card_data">
                <span class="main__container_right_container_card_data_title"
                  >WORK</span
                >
                <span class="main__container_right_container_card_data_desc"
                  >Student and freelancer</span
                >
              </div>
              <div class="main__container_right_container_card_data">
                <span class="main__container_right_container_card_data_title"
                  >JOINED</span
                >
                <span class="main__container_right_container_card_data_desc"
                  >21 dic 2022</span
                >
              </div>
            </div>
          </div>
          <div class="main__container_right_container_more">
            <div class="main__container_right_container_more_title">
              <span class="main__container_right_container_more_title_from"
                >More from </span
              ><a
                href=""
                class="main__container_right_container_more_title_name"
                >${publicacion.usuario.nombre} ${publicacion.usuario.apellido}</a
              >
            </div>
            <!---->
            <a class="main__container_right_container_more_links" href="">
              <div class="main__container_right_container_more_links_container">
                <span class="main__container_right_container_more_links_title"
                  >The Only "CSS Selectors" Tutorial You Will Ever
                  Need🔥</span
                >
                <div
                  class="main__container_right_container_more_links_hashts"
                >
                  <span
                    class="main__container_right_container_more_links_hashts_item"
                    >#webdev</span
                  >
                  <span
                    class="main__container_right_container_more_links_hashts_item"
                    >#css</span
                  >
                  <span
                    class="main__container_right_container_more_links_hashts_item"
                    >#beginners</span
                  >
                  <span
                    class="main__container_right_container_more_links_hashts_item"
                    >#tutorial</span
                  >
                </div>
              </div>
            </a>
             <!---->
             <a class="main__container_right_container_more_links" href="">
              <div class="main__container_right_container_more_links_container">
                <span class="main__container_right_container_more_links_title"
                  >Learn All 24 "CSS Viewport" Units💫</span
                >
                <div
                  class="main__container_right_container_more_links_hashts"
                >
                  <span
                    class="main__container_right_container_more_links_hashts_item"
                    >#webdev</span
                  >
                  <span
                    class="main__container_right_container_more_links_hashts_item"
                    >#programming</span
                  >
                  <span
                    class="main__container_right_container_more_links_hashts_item"
                    >#css</span
                  >
                  <span
                    class="main__container_right_container_more_links_hashts_item"
                    >#beginners</span
                  >
                </div>
              </div>
            </a>
            <!---->
            <a class="main__container_right_container_more_links" href="">
              <div class="main__container_right_container_more_links_container">
                <span class="main__container_right_container_more_links_title"
                  >The Only CSS Flexbox Illustration You Will Ever Need</span
                >
                <div
                  class="main__container_right_container_more_links_hashts"
                >
                  <span
                    class="main__container_right_container_more_links_hashts_item"
                    >#webdev</span
                  >
                  <span
                    class="main__container_right_container_more_links_hashts_item"
                    >#css</span
                  >
                  <span
                    class="main__container_right_container_more_links_hashts_item"
                    >#beginners</span
                  >
                  <span
                    class="main__container_right_container_more_links_hashts_item"
                    >#tutorial</span
                  >
                </div>
              </div>
            </a>
          </div>
          <div class="main__container_right_container_dev "> 
            <div class="main__container_right_container_dev_title">
                <span class="main__container_right_container_dev_text">DEV Community</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a17ozpk8npmktuhxixjy836v59e8hnc0" class="main__container_right_container_dev_title_dots"><title id="a17ozpk8npmktuhxixjy836v59e8hnc0">Dropdown menu</title>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
              </svg>
            </div>
            <img class="main__container_right_container_dev_img" src="./img/post/dev.jfif" alt="">
            <a class="main__container_right_container_dev_main_link" href="">Redis Performance Tuning: How to Optimize Redis for High-Traffic Applications</a>
            <p class="main__container_right_container_dev_parag">
              Explore the best practices and techniques for tuning Redis performance to ensure your application can handle the most demanding workloads.
            </p>
            <a class="main__container_right_container_dev_main_link small" href="">Read full post</a>
          </div>
        </div>
      
      `
      postHtmlButtonEdit = ``

        postContainer.innerHTML = postHtml;
        postRightContainer.innerHTML = postRigthHtml;
        postButtonEdit.innerHTML = postHtmlButtonEdit;
    });
})