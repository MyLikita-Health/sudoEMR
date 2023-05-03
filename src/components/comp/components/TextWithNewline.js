import React from 'react'

export default function TextWithNewLine(props) {
  const text = props.text
  const newText = text && text.split('\n').map((str) => <p>{str}</p>)

  return newText
}
