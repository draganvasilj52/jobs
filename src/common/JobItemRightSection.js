const JobItemRightSection = ({ item }) => {
  return (
    <div className="jobsContainer_item_right_info">
      <div className="jobsContainer_item_right_info_top">
        {item.icon}
        <span>{item.spanText}</span>
      </div>
      <div className="jobsContainer_item_right_info_bottom">{item.title}</div>
    </div>
  )
}

export default JobItemRightSection
