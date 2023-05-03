import React from 'react'
import { useSelector } from 'react-redux'
import { Card, CardBody, CardFooter, CardHeader } from 'reactstrap'
import BackButton from './BackButton'

function CustomCard(props) {
  const { header, footer, back, headerRight,footerStyle='' } = props

  return (
    <Card
      className={`${props.container}`}
      // outline
      style={{
        ...props.style,
        borderWidth: 1,
        // borderColor: activeBusiness.primary_color,
        borderStyle: 'solid',
      }}
    >
      {header && (
        <CardHeader
          // className={`py-2`}
          style={{
            // borderBottom: `1px solid ${activeBusiness.primary_color}`,
            // backgroundColor: activeBusiness.primary_color,
            // color: activeBusiness.secondary_color,
            paddingTop: '.4rem',
            paddingBottom: '.4rem',
          }}
          className={back || headerRight ? 'row m-0 align-items-center' : ''}
        >
          {(back || headerRight) && (
            <div className="col-md-3">
              {back && <BackButton text="Go Back" />}
            </div>
          )}
          <h5
            className={
              back || headerRight ? 'col-md-6 text-center' : 'text-center'
            }
          >
            {header}
          </h5>
          {/* <div className={back ? 'col-md-6' : ''}>{header}</div> */}
          {headerRight && <div className="col-md-3">{headerRight}</div>}
        </CardHeader>
      )}
      <CardBody className={props.body}>{props.children}</CardBody>
      {footer && (
        <CardFooter
          style={
            {
              // borderBottom: `1px solid ${activeBusiness.primary_color}`,
              // backgroundColor: activeBusiness.primary_color,
              // color: activeBusiness.secondary_color,
              // paddingTop: '.4rem',
              // paddingBottom: '.4rem',
            }
          }
          className={footerStyle}
        >
          {footer}
        </CardFooter>
      )}
    </Card>
  )
}

export default CustomCard
