import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { tempAction } from '../../store/actions'

class Search extends Component {
  componentDidMount() {
    this.props.fetchTemp()
  }
  state = {
    result : [
      {
        _id           : '5fd769977560ec68a86d5343',
        avatar        : 'https://thispersondoesnotexist.com/image',
        name          : 'Dr. Johns Sims',
        qualification : 'Ipsum pariatur cupidatat dolore ad excepteur. Id id excepteur veniam enim.',
        location      : '679 Christopher Avenue, Islandia',
        rating        : 'Good',
      },
      {
        _id           : '5fd76997f47c84fafd876852',
        avatar        : 'https://thispersondoesnotexist.com/image',
        name          : 'Dr. Yvonne Knox',
        qualification :
          'Adipisicing veniam culpa mollit non irure tempor commodo ipsum. Amet irure deserunt eu velit laborum irure cupidatat proident officia nisi irure laboris enim.',
        location      : '549 Argyle Road, Lewis',
        rating        : 'Good',
      },
      {
        _id           : '5fd76997f8b8272b5fed1199',
        avatar        : 'https://thispersondoesnotexist.com/image',
        name          : 'Dr. Kim Love',
        qualification :
          'Labore enim est in eu id ex fugiat pariatur est fugiat. Velit anim mollit laboris elit magna. Est reprehenderit deserunt duis fugiat mollit.',
        location      : '687 Claver Place, Urie',
        rating        : 'Good',
      },
      {
        _id           : '5fd76997a847009309629648',
        avatar        : 'https://thispersondoesnotexist.com/image',
        name          : 'Dr. Betsy Sellers',
        qualification : 'Proident commodo reprehenderit dolore aliquip deserunt.',
        location      : '260 Oak Street, Breinigsville',
        rating        : 'Bad',
      },
      {
        _id           : '5fd76997f9a14b7e97981bd7',
        avatar        : 'https://thispersondoesnotexist.com/image',
        name          : 'Dr. Alejandra Calderon',
        qualification :
          'Esse cupidatat enim ipsum deserunt officia. Laboris ad elit est qui commodo consectetur qui in ipsum nisi exercitation fugiat magna. Ea eiusmod laborum magna adipisicing ad consequat magna occaecat esse cillum deserunt dolore.',
        location      : '185 Story Court, Gratton',
        rating        : 'Okay',
      },
      {
        _id           : '5fd769977b7ec5962d4883d8',
        avatar        : 'https://thispersondoesnotexist.com/image',
        name          : 'Dr. Sandy Mooney',
        qualification :
          'Magna sint ex reprehenderit consequat consequat aute cillum. Sint officia culpa aute consequat velit reprehenderit reprehenderit culpa.',
        location      : '131 Channel Avenue, Vallonia',
        rating        : 'Okay',
      },
      {
        _id           : '5fd769978c1daef98c3f9e1f',
        avatar        : 'https://thispersondoesnotexist.com/image',
        name          : 'Dr. Clark Owens',
        qualification :
          'Enim quis sunt pariatur ad consequat minim aliquip dolore voluptate deserunt nostrud ullamco nulla est. Veniam velit aliquip excepteur laboris voluptate irure non voluptate elit irure labore eu sunt.',
        location      : '719 Seeley Street, Ahwahnee',
        rating        : 'Bad',
      },
      {
        _id           : '5fd76997ff5241aa89ec58f5',
        avatar        : 'https://thispersondoesnotexist.com/image',
        name          : 'Dr. Bridgett Banks',
        qualification :
          'Sint aliquip ea amet quis commodo laboris reprehenderit. Officia deserunt pariatur ad in. Nostrud do sunt aliquip est ipsum ut adipisicing ut laborum eiusmod occaecat pariatur.',
        location      : '343 Chester Avenue, Moquino',
        rating        : 'Okay',
      },
      {
        _id           : '5fd769977e4d6f260e0c8bb2',
        avatar        : 'https://thispersondoesnotexist.com/image',
        name          : 'Dr. Johnston Franks',
        qualification :
          'Nostrud reprehenderit nulla ex velit nulla minim reprehenderit occaecat id elit reprehenderit mollit dolore.',
        location      : '641 Lafayette Walk, Maplewood',
        rating        : 'Okay',
      },
      {
        _id           : '5fd7699708dbdc390e3e5114',
        avatar        : 'https://thispersondoesnotexist.com/image',
        name          : 'Dr. Tracy Guy',
        qualification :
          'Eiusmod elit dolor irure ex dolor proident tempor. Aliquip ullamco ex sunt labore irure proident qui aute.',
        location      : '386 Stryker Street, Washington',
        rating        : 'Good',
      },
      {
        _id           : '5fd76997e72ddb6db3b582a1',
        avatar        : 'https://thispersondoesnotexist.com/image',
        name          : 'Dr. Stanley Becker',
        qualification :
          'Sit cupidatat deserunt est aute quis voluptate incididunt pariatur excepteur Lorem ullamco amet veniam voluptate.',
        location      : '768 Flatlands Avenue, Hegins',
        rating        : 'Okay',
      },
      {
        _id           : '5fd7699778bdcbdab61862a7',
        avatar        : 'https://thispersondoesnotexist.com/image',
        name          : 'Dr. Jordan Jenkins',
        qualification :
          'Cillum sunt et dolore aliqua enim incididunt ut sunt pariatur quis elit eiusmod dolor velit. Dolore dolor culpa sint duis commodo id aute dolore enim.',
        location      : '237 Bath Avenue, Moraida',
        rating        : 'Bad',
      },
      {
        _id           : '5fd769979c1a2ebff25e2ce1',
        avatar        : 'https://thispersondoesnotexist.com/image',
        name          : 'Dr. Hughes Colon',
        qualification :
          'Aute ipsum occaecat labore voluptate cupidatat ullamco pariatur id consectetur qui cupidatat cupidatat. Est sit ipsum aliqua ea in cillum sint nostrud adipisicing.',
        location      : '178 Moffat Street, Graniteville',
        rating        : 'Okay',
      },
      {
        _id           : '5fd76997ff09ded245122c57',
        avatar        : 'https://thispersondoesnotexist.com/image',
        name          : 'Dr. Dawson Skinner',
        qualification :
          'Lorem duis incididunt proident dolore. Occaecat excepteur veniam anim pariatur cupidatat nulla ad excepteur voluptate ex irure nisi magna. Ut dolore ut commodo dolor.',
        location      : '221 Decatur Street, Epworth',
        rating        : 'Bad',
      },
      {
        _id           : '5fd76997972469721528667c',
        avatar        : 'https://thispersondoesnotexist.com/image',
        name          : 'Dr. Leonard Harrison',
        qualification :
          'Ea tempor incididunt est mollit voluptate commodo excepteur consectetur enim adipisicing non. Qui adipisicing est minim aute enim reprehenderit magna dolor sunt in nulla eiusmod do non.',
        location      : '617 Amersfort Place, Brazos',
        rating        : 'Good',
      },
      {
        _id           : '5fd769973c1399828afde2d8',
        avatar        : 'https://thispersondoesnotexist.com/image',
        name          : 'Dr. Donna Figueroa',
        qualification :
          'Aliqua amet qui deserunt non fugiat in dolore reprehenderit voluptate est et tempor. Anim esse dolor duis sit aute deserunt consequat ipsum irure non aliqua culpa nostrud nisi.',
        location      : '491 Kimball Street, Sanborn',
        rating        : 'Good',
      },
      {
        _id           : '5fd769972be3cf71b09bcb64',
        avatar        : 'https://thispersondoesnotexist.com/image',
        name          : 'Dr. Nicole Walsh',
        qualification :
          'Quis qui excepteur deserunt aliquip mollit amet nulla irure non pariatur. Velit Lorem amet occaecat occaecat fugiat amet velit nisi quis id nulla adipisicing nostrud et.',
        location      : '921 Huntington Street, Limestone',
        rating        : 'Good',
      },
      {
        _id           : '5fd76997b8065998c309d9b5',
        avatar        : 'https://thispersondoesnotexist.com/image',
        name          : 'Dr. Deloris May',
        qualification :
          'Laboris sint amet irure magna. Laborum cillum velit nisi esse ea. Commodo exercitation eiusmod officia sunt Lorem eiusmod velit est duis.',
        location      : '972 Pineapple Street, Sedley',
        rating        : 'Bad',
      },
      {
        _id           : '5fd769974c67644ccff05200',
        avatar        : 'https://thispersondoesnotexist.com/image',
        name          : 'Dr. Cassandra Richards',
        qualification :
          'Adipisicing culpa duis id reprehenderit eiusmod. Veniam est nulla ea irure elit excepteur. Lorem nisi ea exercitation aliqua.',
        location      : '255 Stewart Street, Clayville',
        rating        : 'Okay',
      },
      {
        _id           : '5fd769977b05dfab7cee00a2',
        avatar        : 'https://thispersondoesnotexist.com/image',
        name          : 'Dr. Stout Parrish',
        qualification :
          'Fugiat sit do aliquip excepteur quis dolore laboris aliqua Lorem officia laboris. Non ipsum mollit mollit eu dolore minim officia irure veniam mollit labore aliquip exercitation.',
        location      : '383 Doscher Street, Greer',
        rating        : 'Bad',
      },
      {
        _id           : '5fd769971897282cb383f4de',
        avatar        : 'https://thispersondoesnotexist.com/image',
        name          : 'Dr. Eddie Ramirez',
        qualification :
          'Laboris voluptate velit dolor do dolor. Do laboris veniam proident nisi. Ea consequat esse nisi nisi fugiat minim ad mollit culpa.',
        location      : '163 Creamer Street, Fredericktown',
        rating        : 'Good',
      },
      {
        _id           : '5fd76997f9be56bdd87220be',
        avatar        : 'https://thispersondoesnotexist.com/image',
        name          : 'Dr. Holt Barnes',
        qualification :
          'Velit commodo in reprehenderit dolor fugiat velit aute sit mollit commodo adipisicing sunt adipisicing aliquip. Nisi consectetur nostrud occaecat aliqua sit.',
        location      : '896 Railroad Avenue, Osage',
        rating        : 'Bad',
      },
      {
        _id           : '5fd76997b26e281793c9cb19',
        avatar        : 'https://thispersondoesnotexist.com/image',
        name          : 'Dr. Navarro Knowles',
        qualification : 'Reprehenderit non qui commodo Lorem incididunt.',
        location      : '951 Lois Avenue, Englevale',
        rating        : 'Good',
      },
      {
        _id           : '5fd76997caf1bb34a8140b1e',
        avatar        : 'https://thispersondoesnotexist.com/image',
        name          : 'Dr. Olson Maldonado',
        qualification :
          'Lorem ad ex cupidatat proident. Excepteur aute sunt esse occaecat quis pariatur amet laborum ex sunt duis deserunt ullamco.',
        location      : '789 Tompkins Avenue, Glasgow',
        rating        : 'Okay',
      },
      {
        _id           : '5fd76997cbc023ef660bd3a5',
        avatar        : 'https://thispersondoesnotexist.com/image',
        name          : 'Dr. Odonnell Gregory',
        qualification :
          'Nostrud et anim enim ipsum ad dolor excepteur incididunt laboris ut sit Lorem. Nulla pariatur est ad ullamco aute eiusmod id laboris.',
        location      : '467 Surf Avenue, Maybell',
        rating        : 'Okay',
      },
      {
        _id           : '5fd769978458059dc0c65421',
        avatar        : 'https://thispersondoesnotexist.com/image',
        name          : 'Dr. Milagros Carson',
        qualification :
          'Sunt proident ad nisi commodo esse proident aute enim qui in laboris. Ex sit ipsum in aliquip. Ex dolore laborum non aliqua tempor enim laboris nulla velit ipsum.',
        location      : '216 Livonia Avenue, Gorst',
        rating        : 'Okay',
      },
      {
        _id           : '5fd76997b0d3c489a07a1e2e',
        avatar        : 'https://thispersondoesnotexist.com/image',
        name          : 'Dr. Dalton Rosales',
        qualification :
          'Reprehenderit mollit esse ipsum id elit laboris magna irure magna ut tempor Lorem quis aliquip. Anim aliqua consectetur occaecat do minim consectetur sunt ullamco elit enim veniam minim id dolor.',
        location      : '569 Furman Avenue, Bagtown',
        rating        : 'Good',
      },
      {
        _id           : '5fd7699761f60c01754c84ee',
        avatar        : 'https://thispersondoesnotexist.com/image',
        name          : 'Dr. Battle Macias',
        qualification :
          'Qui cupidatat eiusmod elit fugiat fugiat proident ut proident Lorem labore. Aliqua Lorem non pariatur tempor reprehenderit occaecat et eiusmod in deserunt nisi. Commodo id aliqua exercitation occaecat cillum.',
        location      : '222 Thomas Street, Rodanthe',
        rating        : 'Good',
      },
      {
        _id           : '5fd7699764e52810e69f18cf',
        avatar        : 'https://thispersondoesnotexist.com/image',
        name          : 'Dr. Arline Moreno',
        qualification :
          'Sint non reprehenderit consequat sint dolor dolor mollit exercitation minim ex officia consequat aute anim. Deserunt enim eu et enim proident in non aliqua irure. Sit do aute aliqua ad culpa cupidatat consequat esse eiusmod magna officia commodo quis.',
        location      : '984 Campus Place, Cecilia',
        rating        : 'Good',
      },
      {
        _id           : '5fd76997592684aa2f3475ce',
        avatar        : 'https://thispersondoesnotexist.com/image',
        name          : 'Dr. Palmer Frederick',
        qualification : 'Nostrud ea cupidatat officia ullamco.',
        location      : '263 Norwood Avenue, Colton',
        rating        : 'Bad',
      },
    ],
  }

  render() {
    const { temp } = this.props
    const { result } = this.state

    return (
      <Fragment>
        <section className='col'>
          <label className='search'>
            <div className='search__icon'>
              <i className='material-icons'>search</i>
            </div>
            <input className='search__input' placeholder='Search for...' />
          </label>
          <div className='row justify-content-between mx-5'>
            <p>Results</p>
            <p>Sorted by</p>
          </div>
          <div className='container-fluid row flex-wrap justify-content-between m-0'>
            {result.map(({ avatar, name, qualification, location, rating }) => (
              <div className='card shadow-sm mr-auto m-0' style={{ minWidth: '26em', maxWidth: '30rem' }}>
                <div className='card-body'>
                  <div className='d-flex'>
                    <figure class='figure'>
                      <img
                        src={avatar}
                        className='figure-img img-fluid rounded'
                        alt={name}
                        style={{ minWidth: '10rem', width: '10rem' }}
                      />
                    </figure>
                    <div className='container' style={{ width: '20rem' }}>
                      <h3 class='card-title'>
                        {name}
                        <br />
                        <small class='text-muted'>Specialized</small>
                      </h3>
                      <h5>Review: {rating}</h5>
                    </div>
                  </div>
                  <div>
                    <div className='mb-3'>
                      <h6 className='mb-0 text-muted'>Location</h6>
                      <small>{location}</small>
                    </div>
                    <div className='mb-3'>
                      <h6 className='mb-0 text-muted'>Qualification</h6>
                      <small>{qualification}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className='col-3'>Location</section>

        {/* <div class='grid grid-col-3-1'>
          <section className='main'>
            <label className='search'>
              <div className='search__icon'>
                <i className='material-icons'>search</i>
              </div>
              <input className='search__input' placeholder='Search for...' />
            </label>
            <div className='flex flex-pos-between p-hor-5'>
              <p>Results</p>
              <p>Sorted by</p>
            </div>
            <div className='container-card'>
              {result.map(({ avatar, name, qualification, location, rating }) => (
                <div className='card result'>
                  <div className='flex flex-vpos-to-middle m-bottom-1'>
                    <img src={avatar} width='80' style={{ borderRadius: '0.6rem' }} />
                    <div className='container p-left-1'>
                      <h4>{name}</h4>
                      <p>Specialized</p>
                    </div>
                  </div>
                  <div className='container'>
                    <div className='label p-bottom-0'>Qualification</div>
                    <p class='ellipsis'>{qualification}</p>
                  </div>
                  <div className='flex flex-pos-between'>
                    <div className='container'>
                      <div className='label p-bottom-0'>Location</div>
                      <p>{location}</p>
                    </div>
                    <div className='container'>
                      <div className='label p-bottom-0'>Rating</div>
                      <p>{rating}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className='aside'>Location</section>
        </div>
       */}
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  temp : state.temp,
})
const mapDispatchToProps = dispatch => ({
  fetchTemp : payload => dispatch(tempAction.send.fetch(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
