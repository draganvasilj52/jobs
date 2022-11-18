import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  jobsList: [
    {
      technologies: ['React'],
      companyName: 'Company A',
      location: ['Zenica', 'Mostar'],
      experience: ['Junior'],
      applicationDeadline: '23 more days',
      jobTitle: 'React Junior',
    },
    {
      technologies: ['Node'],
      companyName: 'Company B',
      location: ['Mostar', 'Sarajevo'],
      experience: ['Junior', 'Medior'],
      applicationDeadline: '23 more days',
      jobTitle: 'Node Medior',
    },
    {
      technologies: ['Node', 'React'],
      companyName: 'Company C',
      location: ['Mostar'],
      experience: ['Medior', 'Senior'],
      applicationDeadline: '23 more days',
      jobTitle: 'Full Stack React & Node',
    },
    {
      technologies: ['React'],
      companyName: 'Company D',
      location: ['Sarajevo', ' Mostar'],
      experience: ['Senior'],
      applicationDeadline: '23 more days',
      jobTitle: 'React Senior',
    },
    {
      technologies: ['Node'],
      companyName: 'Company E',
      location: ['Sarajevo'],
      experience: ['Senior'],
      applicationDeadline: '23 more days',
      jobTitle: 'Node Senior',
    },
  ],
  filteredArray: [],
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    filterJobs(state, action) {
      let errors = action.payload

      let newArray = state.jobsList.filter(
        (item) =>
          item.location.some((i) =>
            Object.values(errors['location']).includes(i)
          ) ||
          item.experience.some((i) =>
            Object.values(errors['experience']).includes(i)
          ) ||
          item.technologies.some((i) =>
            Object.values(errors['technologies']).includes(i)
          )
      )

      state.filteredArray = newArray
    },
    resetFilter(state) {
      let copy = [...state.jobsList]

      state.filteredArray = copy
    },
    copyInitialState(state) {
      let copy = [...state.jobsList]

      state.filteredArray = copy
    },
  },
})

export const { filterJobs, resetFilter, copyInitialState } = dataSlice.actions

export default dataSlice.reducer
