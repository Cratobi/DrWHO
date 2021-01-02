import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { reviewAction } from '../../store/actions'

class ReviewDoctor extends Component {
  componentDidMount() {
    this.props.fetchReview({ id_review: '', license_number: this.props.user.license_number })
  }
  state = {
    id_appointment : '',
    review_modal   : '',
    license_number : '',
    ratings        : '0',
    comments       : '',
  }

  render() {
    const { onChange, onSendReview } = this
    const { review_list, appointment_list } = this.props
    const { id_appointment, review_modal, ratings, comments } = this.state

    return (
      <Fragment>
        {/* Main */}
        <section className='col'>
          <div className='d-flex justify-content-between mx-5 mt-4'>
            <h6 className='text-muted mb-3'>Reviews: {review_list.length}</h6>
          </div>

          {/* Reviews */}
          <div className='container-fluid row flex-wrap justify-content-center grid-card-last m-0'>
            {review_list.length != 0 &&
              review_list.map(({ id_review, name, ratings, comments }) => (
                <div key={id_review} className='card my-1'>
                  <div className='card-body'>
                    <div className='d-flex justify-content-between px-1'>
                      <h6>{name}</h6>
                      <b>{ratings}/5</b>
                    </div>
                    <hr />
                    <p>{comments}</p>
                  </div>
                </div>
              ))}
          </div>
        </section>
        {/* Right Bar */}
        <section className='col-3 hanging'>
          <div className='d-flex justify-content-between ms-3 mt-4'>
            <h6 className='text-muted' />
          </div>
        </section>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  user        : state.user.user,
  review_list : state.review.review_list,
})
const mapDispatchToProps = dispatch => ({
  fetchReview  : payload => dispatch(reviewAction.send.fetch(payload)),
  createReview : payload => dispatch(reviewAction.send.create(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewDoctor)
