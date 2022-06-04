import React from 'react'
import '../Body/body.css'
import body_person from '../Body/bodyAssets/Bro. Innaci - Omega voice ministries.png'
import bird_img from '../Body/bodyAssets/IMG_9033_edited.jpg'
import live_tv from '../Body/bodyAssets/live_tv_black_24dp.svg'
import body_person_2 from '../Body/bodyAssets/IMG_9418.JPG'
// import directions_svg from '../Body/bodyAssets/directions_black_24dp.svg'
import body_5_img from '../Body/bodyAssets/Screenshot 2022-04-14 231027.png'
import body_6_img from '../Body/bodyAssets/body-5-img-2.png'
import body_5_6_img from '../Body/bodyAssets/body-5-6-full.png'
import books_img from '../Body/bodyAssets/book_black_24dp.svg'
import movies_img from '../Body/bodyAssets/movie_filter_black_24dp.svg'
import books_img_2 from '../Body/bodyAssets/developer_board_black_24dp.svg'
import volunteer_img from '../Body/bodyAssets/volunteer_activism_black_24dp.svg'
import stories_img from '../Body/bodyAssets/auto_stories_black_24dp.svg'
import body_8_img from '../Body/bodyAssets/body-8-img.JPG'
import body_9_img_1 from '../Body/bodyAssets/body-9-img-1.jpg'
import body_9_img_2 from '../Body/bodyAssets/body-9-img-2.jpg'
import body_9_img_3 from '../Body/bodyAssets/body-9-img-3.jpg'
import body_10_img from '../Body/bodyAssets/body-10-img.png'


export default function Body() {
  return (
    <>
      <section id='body-1'>
        <h1 className='heading'>Omega voice ministries</h1>
        <h2 className='sub-heading'>End-time proclamation of GOD's word</h2>
        <div className='links'>
          <p>Prayer request &gt;</p>
          <p>About &gt;</p>
        </div>
        <img className='body_person' src={body_person} alt="body_person" />
      </section>

      <section id='body-2'>
        <div className='sec-2-body'>
          <img className='bird_img' src={bird_img} alt="bird-img" />
          <div className='content-sec-2'>
            <h1 className='content-sec-2-heading'>The word</h1>
            <hr className='underline'></hr>
            <p className='sec-2-body-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas bibendum non erat dictum aliquam. Sed fermentum, diam sit amet semper finibus, lectus quam.</p>
            <p className='right-aligned-text'>-Exodus 23:25</p>
            <div className='sec-2-language-switcher'>
              <p className='language-switcher'>A</p>
              <p className='language-switcher'>आ</p>
              <p className='language-switcher'>ಕ</p>
              <p className='language-switcher'>അ</p>
              <p className='language-switcher'>அ</p>
              <p className='language-switcher'>క</p>
            </div>
          </div>
        </div>
      </section>

      <section id='body-3'>
        <div className='body-3-flex'>
          <d  iv className='body-3'>
            <div className='sec-3'>
              <h1>LIVE SCHEDULE</h1>
              <h2>Watch & Worship</h2>
              <h3>Spiritual garden</h3>
              <p>24 Mar 2022 @ 2:00 pm - 5:30 pm</p>
              <div className='links'>
                <p className='watch-btn'>Watch now</p>
                <p className='notify-btn'>Notify me</p>
              </div>
              <img className='live_tv_svg' src={live_tv} alt="live_tv_svg" />
            </div>
          </d>
          <div className='body-3'>
            <div className='sec-4'>
              <h1>UPCOMING EVENTS</h1>
              <h2>Come & Worship</h2>
              <div className='carousel'>
                <img className='sec-4-img' src={body_person_2} />
                <img className='sec-4-img-2' src={body_person_2} />
                <img className='sec-4-img-3' src={body_person_2} />
              </div>
              <div className='venues'>
                <div className='venue'>
                  <p className='venue_heading'>25 Jun 2022</p>
                  <p className='venue_subheads'>Rayadurgam</p>
                </div>
                <div className='venue-1'>
                  <p className='venue_heading-1'>Spiritual garden</p>
                  <p className='venue_subheads-1'>Rayadurgam road</p>
                  <p className='venue_subheads'>24 Mar 2022</p>
                  <p className='venue_subheads'>2:00 pm - 5:30 pm</p>
                </div>
                <div className='venue-3'>
                  <p className='venue_heading-3'>25 Jun 2022</p>
                  <p className='venue_subheads-3'>Rayadurgam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='body-5'>
        <img className='body-5-img' src={body_5_img} />
        <img className='body-5-6-img' src={body_5_6_img} />
      </section>

      <section id='body-6'>
        <img className='body-6-img' src={body_6_img} />
      </section>

      <section id='body-7'>
        <div className='body-7-container'>
          <div className='body-7-header'>
            <p className='body-7-container-p-1'>OUR</p>
            <p className='body-7-container-p-2'>MISSION</p>
            <p className='body-7-container-p-3'>contained</p>
          </div>
          <div className='body-7-content'>
            <img className='body-7-content-img' src={books_img} />
            <img className='body-7-content-img' src={books_img_2} />
            <img className='body-7-content-img' src={movies_img} />
            <img className='body-7-content-img' src={volunteer_img} />
            <img className='body-7-content-img' src={stories_img} />
          </div>
          <p className='body-7-container-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam risus nunc, id dignissim diam facilisis in. Proin fringilla eget diam sed imperdiet. Mauris at vehicula leo. Mauris scelerisque tristique metus, non malesuada metus condimentum vel. Etiam leo nibh, efficitur in suscipit vitae, efficitur eget libero. In nec leo eros.</p>
        </div>
      </section>

      <section id='body-8'>
        <img className='body-8-img' src={body_8_img} />
        <p className='body-8-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis congue nunc vel fermentum. Phasellus laoreet commodo consectetur. Pellentesque laoreet, arcu a fermentum placerat, erat ex auctor ante, sed fermentum tortor nulla ut orci. In fringilla nisl magna, sit amet ultrices enim dignissim nec. Duis a elit sit amet lacus pellentesque sagittis quis in eros. Nulla facilisi. Mauris porttitor lectus in tristique accumsan. Vivamus nec turpis metus. Morbi convallis, neque id laoreet dictum, leo erat auctor odio, ut interdum nibh augue et mi. Cras commodo, odio non viverra iaculis, neque arcu suscipit diam, ac sodales tortor tortor eu felis. Ut nec ante in mauris tempus faucibus. Praesent sollicitudin vestibulum orci non aliquam. Pellentesque at sagittis orci. Nulla sollicitudin diam eu mi vehicula, ut ultricies felis ullamcorper. Sed sit amet vulputate turpis. Aliquam consequat lacinia ex, in scelerisque est efficitur et.</p>
        <p className='body-8-sub-p'>-Bro. C Innaci</p>
        <div className='body-8-extras'>
          <p id='active' className='body-8-language-switcher'>A</p>
          <p className='body-8-language-switcher'>आ</p>
          <p className='body-8-language-switcher'>ಕ</p>
          <p className='body-8-language-switcher'>അ</p>
        </div>
        <div className='body-8-dots'>
          <span id='active' class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </section>

      <section id='body-9'>
        <div className='cards'>
          <div className='card-1'>
            <img className='card-img' src={body_9_img_1} />
            <p className='card-title'>ARTICLE</p>
            <p className='card-subheading'>"LIGHT OF THE WORLD"</p>
            <p className='card-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis lacinia odio sit amet pulvinar. Curabitur arcu lorem, varius ut tellus sit amet, semper pulvinar neque. Suspendisse potenti. Phasellus ultrices tellus vel neque sollicitudin.</p>
            <p className='card-venue'>Jovana Bernice, Ballari</p>
            <p className='card-date'>25 Jun 2022</p>
          </div>
          <div className='card-1'>
            <img className='card-img' src={body_9_img_2} />
            <p className='card-title'>TESTIMONY</p>
            <p className='card-subheading'>"LIGHT OF THE WORLD, TITLE ENDING IN LINE 2 BE LIKE"</p>
            <p className='card-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis lacinia odio sit amet pulvinar. Curabitur arcu lorem, varius ut tellus sit amet, semper pulvinar neque. Suspendisse potenti. Phasellus ultrices tellus vel neque sollicitudin.</p>
            <p className='card-venue'>Aora Clef Joshua, Spiritual garden</p>
            <p className='card-date'>25 Jun 2022</p>
          </div>
          <div className='card-1'>
            <img className='card-img' src={body_9_img_3} />
            <p className='card-title'>BLOG</p>
            <p className='card-subheading'>"LIGHT OF THE WORLD, TITLE TOO LONG ENDS WITH...."</p>
            <p className='card-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis lacinia odio sit amet pulvinar. Curabitur arcu lorem, varius ut tellus sit amet, semper pulvinar neque. Suspendisse potenti. Phasellus ultrices tellus vel neque sollicitudin.</p>
            <p className='card-venue'>Evengaline Marshall, Bangalore</p>
            <p className='card-date'>25 Jun 2022</p>
          </div>
        </div>
      </section>

      <section id='body-10'>
        <div className='body-10-content'>
          <img className='body-10-img' src={body_10_img} />
        </div>
      </section>

      <section id='body-11'>
        <div className='body-11-content'>
          <div className='item'>
            <img className='item-img' src={require('../Body/bodyAssets/body-11-1.jpg')} />
            <p className='item-heading'>ARTICLE</p>
            <p className='item-subheading'>The ROSE</p>
            <p className='item-credits'>Author name</p>
          </div>
          <div className='item'>
            <img className='item-img' src={require('../Body/bodyAssets/body-11-2.jpg')} />
            <p className='item-heading'>ARTICLE</p>
            <p className='item-subheading'>The ROSE</p>
            <p className='item-credits'>Author name</p>
          </div>
          <div className='item'>
            <img className='item-img' src={require('../Body/bodyAssets/body-11-3.jpg')} />
            <p className='item-heading'>BLOG</p>
            <p className='item-subheading'>The ROSE</p>
            <p className='item-credits'>Author name</p>
          </div>
          <div className='item'>
            <img className='item-img' src={require('../Body/bodyAssets/body-11-4.jpg')} />
            <p className='item-heading'>TESTIMONY</p>
            <p className='item-subheading'>The ROSE</p>
            <p className='item-credits'>Author name</p>
          </div>
          <div className='item'>
            <img className='item-img' src={require('../Body/bodyAssets/body-11-5.jpg')} />
            <p className='item-heading'>BLOG</p>
            <p className='item-subheading'>The ROSE</p>
            <p className='item-credits'>Author name</p>
          </div>
          <div className='item'>
            <img className='item-img' src={require('../Body/bodyAssets/body-11-6.jpg')} />
            <p className='item-heading'>ARTICLE</p>
            <p className='item-subheading'>The ROSE</p>
            <p className='item-credits'>Author name</p>
          </div>
          <div className='item'>
            <img className='item-img' src={require('../Body/bodyAssets/body-11-7.jpg')} />
            <p className='item-heading'>TESTIMONY</p>
            <p className='item-subheading'>The ROSE</p>
            <p className='item-credits'>Author name</p>
          </div>
          <div className='item'>
            <img className='item-img' src={require('../Body/bodyAssets/body-11-8.jpg')} />
            <p className='item-heading'>ARTICLE</p>
            <p className='item-subheading'>The ROSE</p>
            <p className='item-credits'>Author name</p>
          </div>
        </div>
      </section>

      <section id='body-12'>
        <img src={require('../Body/bodyAssets/body-12.png')} />
      </section>

      <section id='body-13'>
        <div className='body-13-content'>
          <div className='body-13-item'>
            <img className='body-13-item-img' src={require('../Body/bodyAssets/body-13.jpg')} />
            <p className='item-heading'>MUSIC</p>
            <p className='item-subheading'>PA-ALBUM</p>
            <p className='item-credits'>Host name</p>
          </div>
          <div className='body-13-item'>
            <img className='body-13-item-img' src={require('../Body/bodyAssets/body-13.jpg')} />
            <p className='item-heading'>TESTIMONY</p>
            <p className='item-subheading'>TESTIMONY TITLE</p>
            <p className='item-credits'>Host name</p>
          </div>
          <div className='body-13-item'>
            <img className='body-13-item-img' src={require('../Body/bodyAssets/body-13.jpg')} />
            <p className='item-heading'>SPEECH</p>
            <p className='item-subheading'>IN THE BEGINING</p>
            <p className='item-credits'>Host name</p>
          </div>
          <div className='body-13-item'>
            <img className='body-13-item-img' src={require('../Body/bodyAssets/body-13.jpg')} />
            <p className='item-heading'>WORSHIP</p>
            <p className='item-subheading'>HOLY BE YOUR WORSHIP</p>
            <p className='item-credits'>Host name</p>
          </div>
          <div className='body-13-item'>
            <img className='body-13-item-img' src={require('../Body/bodyAssets/body-13.jpg')} />
            <p className='item-heading'>TESTIMONY</p>
            <p className='item-subheading'>TESTIMONY TITLE</p>
            <p className='item-credits'>Host name</p>
          </div>
        </div>
      </section>

      <section id='body-14'>
        <div className='body-14-content'>
          <div className='body-13-item'>
            <img className='body-13-item-img' src={require('../Body/bodyAssets/body-13.jpg')} />
            <p className='item-heading'>MUSIC</p>
            <p className='item-subheading'>PA-ALBUM</p>
            <p className='item-credits'>Host name</p>
          </div>
          <div className='body-13-item'>
            <img className='body-13-item-img' src={require('../Body/bodyAssets/body-13.jpg')} />
            <p className='item-heading'>TESTIMONY</p>
            <p className='item-subheading'>TESTIMONY TITLE</p>
            <p className='item-credits'>Host name</p>
          </div>
          <div className='body-13-item'>
            <img className='body-13-item-img' src={require('../Body/bodyAssets/body-13.jpg')} />
            <p className='item-heading'>SPEECH</p>
            <p className='item-subheading'>IN THE BEGINING</p>
            <p className='item-credits'>Host name</p>
          </div>
          <div className='body-13-item'>
            <img className='body-13-item-img' src={require('../Body/bodyAssets/body-13.jpg')} />
            <p className='item-heading'>WORSHIP</p>
            <p className='item-subheading'>HOLY BE YOUR WORSHIP</p>
            <p className='item-credits'>Host name</p>
          </div>
        </div>
      </section>

      <section id='body-15'>
        <div className='body-15-content'>
          <div className='body-15-card'>
            <h1 className='body-15-card-heading'>LIVE CONSOLE</h1>
            <h2 className='body-15-card-subheading'>"The Worship Tool"</h2>
            <p className='body-15-card-links'>Know more &gt;</p>
            <img className='body-15-card-img' src={require('../Body/bodyAssets/ovm.png')} />
          </div>

          <div className='body-15-card'>
            <h1 className='body-15-card-heading'>SERMON LOGGER</h1>
            <h2 className='body-15-card-subheading'>"Digital Note"</h2>
            <p className='body-15-card-links'>Know more &gt;</p>
            <img className='body-15-card-img' src={require('../Body/bodyAssets/ovm.png')} />
          </div>
        </div>
      </section>

      <section id='body-15'>
        <div className='body-15-content'>
          <div className='body-15-card'>
            <h1 className='body-15-card-heading'>BIBLED</h1>
            <h2 className='body-15-card-subheading'>"Bible Assistant"</h2>
            <p className='body-15-card-links'>Know more &gt;</p>
            <img className='body-15-card-img' src={require('../Body/bodyAssets/ovm.png')} />
          </div>

          <div className='body-15-card'>
            <h1 className='body-15-card-heading'>OVM</h1>
            <h2 className='body-15-card-subheading'>"Mobile App"</h2>
            <p className='body-15-card-links'>Know more &gt;</p>
            <img className='body-15-card-img' src={require('../Body/bodyAssets/ovm.png')} />
          </div>
        </div>
      </section>

      <section id='body-16'>
        <div className='body-7-header'>
          <p className='body-7-container-p-1'>OUR</p>
          <p className='body-7-container-p-2'>MEMBERS</p>
          <p className='body-7-container-p-3'>OVM</p>
        </div>

        <div className='body-16-content'>
          <div className='body-16-item'>
            <img className='body-16-item-img' src={require('../Body/bodyAssets/Bro_edited.jpg')} />
            <p className='body-16-item-name'>C Innaci</p>
            <p className='body-16-item-post'>President/Leader</p>
          </div>

          <div className='body-16-item'>
            <img className='body-16-item-img' src={require('../Body/bodyAssets/body-16-img-1.jpg')} />
            <p className='body-16-item-name'>Francina</p>
            <p className='body-16-item-post'>Leader</p>
          </div>

          <div className='body-16-item'>
            <img className='body-16-item-img' src={require('../Body/bodyAssets/body-16-item-2.jpg')} />
            <p className='body-16-item-name'>Raymond Irudayaraj</p>
            <p className='body-16-item-post'>Leader/Musician</p>
          </div>
        </div>
      </section>

      <section id='body-17'>
        <img className='body-17-img' src={require('../Body/bodyAssets/ovm_banner.png')} />
      </section>
    </>
  )
}
