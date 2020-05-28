// eslint-disable-next-line no-unused-vars
import React from "react"
import tagStyles from "./tag.module.scss"

export default ({ children }) => (
  <span className={tagStyles.tagContainer}>{ children }</span>
)