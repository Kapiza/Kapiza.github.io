import React from 'react'
import "../css/works_styles.css"

const Works = () => {
  return (
    <div className="works_content">
      <div className="work">
          <img className="work_img" src="img/work_1.png" alt="work_1"/>
          <div className="block right_block">
              <div className="block_title">
                  <span>
                      Note_book
                  </span>
              </div>
              <div className="block_info">
                  <div className="skills">
                      <span className="skill">
                          JS
                      </span>                    
                      <span className="skill">
                          PHP
                      </span>     
                      <span className="skill">
                          Apache
                      </span>    
                  </div>
                  <p>Простенькая программа ввода/вывода текста с сохранением данных в файле</p>
                  <a href="https://github.com/Kapiza/Note_book">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_245_100)">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9404 0C8.91388 0 0 9.16667 0 20.5071C0 29.5721 5.71143 37.2454 13.6347 39.9613C14.6253 40.1654 14.9882 39.52 14.9882 38.9771C14.9882 38.5017 14.9555 36.8721 14.9555 35.1742C9.40857 36.3967 8.25347 32.7296 8.25347 32.7296C7.36204 30.3529 6.04122 29.7421 6.04122 29.7421C4.22571 28.4858 6.17347 28.4858 6.17347 28.4858C8.18735 28.6217 9.24408 30.5908 9.24408 30.5908C11.0265 33.7142 13.8988 32.8317 15.0543 32.2883C15.2192 30.9642 15.7478 30.0475 16.309 29.5383C11.8849 29.0629 7.2302 27.2975 7.2302 19.4204C7.2302 17.1796 8.02204 15.3463 9.27674 13.9204C9.07878 13.4113 8.38531 11.3058 9.4751 8.48792C9.4751 8.48792 11.1588 7.94458 14.9551 10.5929C16.5804 10.144 18.2566 9.91567 19.9404 9.91375C21.6241 9.91375 23.3404 10.1517 24.9253 10.5929C28.722 7.94458 30.4057 8.48792 30.4057 8.48792C31.4955 11.3058 30.8016 13.4113 30.6037 13.9204C31.8914 15.3463 32.6506 17.1796 32.6506 19.4204C32.6506 27.2975 27.9959 29.0288 23.5388 29.5383C24.2653 30.1833 24.8922 31.4054 24.8922 33.3408C24.8922 36.0908 24.8596 38.2979 24.8596 38.9767C24.8596 39.52 25.2229 40.1654 26.2131 39.9617C34.1363 37.245 39.8478 29.5721 39.8478 20.5071C39.8804 9.16667 30.9339 0 19.9404 0Z" fill="white"/>
                          </g>
                          <defs>
                          <clipPath id="clip0_245_100">
                          <rect width="40" height="40" fill="white"/>
                          </clipPath>
                          </defs>
                      </svg>
                  </a>
              </div>
          </div>
      </div>
      <div className="work">
          <img className="work_img" src="img/work_2.png" alt="work_2"/>
          <div className="block left_block">
              <div className="block_title">
                  <span>
                      Stud_service
                  </span>
              </div>
              <div className="block_info">
                  <div className="skills">                
                      <span className="skill">
                          React
                      </span>     
                      <span className="skill">
                          Node.js
                      </span>  
                  </div>
                  <p>Моё To-Do приложение для организации занятий в ВУЗе и не только.</p>
                  <a href="https://github.com/Kapiza/Stud_service">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_245_100)">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9404 0C8.91388 0 0 9.16667 0 20.5071C0 29.5721 5.71143 37.2454 13.6347 39.9613C14.6253 40.1654 14.9882 39.52 14.9882 38.9771C14.9882 38.5017 14.9555 36.8721 14.9555 35.1742C9.40857 36.3967 8.25347 32.7296 8.25347 32.7296C7.36204 30.3529 6.04122 29.7421 6.04122 29.7421C4.22571 28.4858 6.17347 28.4858 6.17347 28.4858C8.18735 28.6217 9.24408 30.5908 9.24408 30.5908C11.0265 33.7142 13.8988 32.8317 15.0543 32.2883C15.2192 30.9642 15.7478 30.0475 16.309 29.5383C11.8849 29.0629 7.2302 27.2975 7.2302 19.4204C7.2302 17.1796 8.02204 15.3463 9.27674 13.9204C9.07878 13.4113 8.38531 11.3058 9.4751 8.48792C9.4751 8.48792 11.1588 7.94458 14.9551 10.5929C16.5804 10.144 18.2566 9.91567 19.9404 9.91375C21.6241 9.91375 23.3404 10.1517 24.9253 10.5929C28.722 7.94458 30.4057 8.48792 30.4057 8.48792C31.4955 11.3058 30.8016 13.4113 30.6037 13.9204C31.8914 15.3463 32.6506 17.1796 32.6506 19.4204C32.6506 27.2975 27.9959 29.0288 23.5388 29.5383C24.2653 30.1833 24.8922 31.4054 24.8922 33.3408C24.8922 36.0908 24.8596 38.2979 24.8596 38.9767C24.8596 39.52 25.2229 40.1654 26.2131 39.9617C34.1363 37.245 39.8478 29.5721 39.8478 20.5071C39.8804 9.16667 30.9339 0 19.9404 0Z" fill="white"/>
                          </g>
                          <defs>
                          <clipPath id="clip0_245_100">
                          <rect width="40" height="40" fill="white"/>
                          </clipPath>
                          </defs>
                      </svg>
                  </a>
              </div>
          </div>
      </div>
      <div className="work">
          <img className="work_img" src="img/work_3.png" alt="work_3"/>
          <div className="block right_block">
              <div className="block_title">
                  <span>
                      Stud_service_2
                  </span>
              </div>
              <div className="block_info">
                  <div className="skills">
                      <span className="skill">
                          JS
                      </span>                    
                      <span className="skill">
                          React
                      </span>     
                      <span className="skill">
                          Redux
                      </span>  
                      <span className="skill">
                          Python
                      </span>  
                      <span className="skill">
                          PostgreSQL
                      </span>  
                  </div>
                  <p>Система, призваная помочь студентам с организаций учебного процесса.</p>
                  <span style={{color: "black", textDecoration: "underline" }}>
                      Проект не завершен
                  </span>
                  <a href="https://github.com/Kapiza/Stud_service_2">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_245_100)">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9404 0C8.91388 0 0 9.16667 0 20.5071C0 29.5721 5.71143 37.2454 13.6347 39.9613C14.6253 40.1654 14.9882 39.52 14.9882 38.9771C14.9882 38.5017 14.9555 36.8721 14.9555 35.1742C9.40857 36.3967 8.25347 32.7296 8.25347 32.7296C7.36204 30.3529 6.04122 29.7421 6.04122 29.7421C4.22571 28.4858 6.17347 28.4858 6.17347 28.4858C8.18735 28.6217 9.24408 30.5908 9.24408 30.5908C11.0265 33.7142 13.8988 32.8317 15.0543 32.2883C15.2192 30.9642 15.7478 30.0475 16.309 29.5383C11.8849 29.0629 7.2302 27.2975 7.2302 19.4204C7.2302 17.1796 8.02204 15.3463 9.27674 13.9204C9.07878 13.4113 8.38531 11.3058 9.4751 8.48792C9.4751 8.48792 11.1588 7.94458 14.9551 10.5929C16.5804 10.144 18.2566 9.91567 19.9404 9.91375C21.6241 9.91375 23.3404 10.1517 24.9253 10.5929C28.722 7.94458 30.4057 8.48792 30.4057 8.48792C31.4955 11.3058 30.8016 13.4113 30.6037 13.9204C31.8914 15.3463 32.6506 17.1796 32.6506 19.4204C32.6506 27.2975 27.9959 29.0288 23.5388 29.5383C24.2653 30.1833 24.8922 31.4054 24.8922 33.3408C24.8922 36.0908 24.8596 38.2979 24.8596 38.9767C24.8596 39.52 25.2229 40.1654 26.2131 39.9617C34.1363 37.245 39.8478 29.5721 39.8478 20.5071C39.8804 9.16667 30.9339 0 19.9404 0Z" fill="white"/>
                          </g>
                          <defs>
                          <clipPath id="clip0_245_100">
                          <rect width="40" height="40" fill="white"/>
                          </clipPath>
                          </defs>
                      </svg>
                  </a>
              </div>
          </div>
      </div>
      <div className="work">
          <img className="work_img" src="img/work_4.png" alt="work_4"/>
          <div className="block left_block">
              <div className="block_title">
                  <span>
                      Portfolio
                  </span>
              </div>
              <div className="block_info">
                  <div className="skills">
                      <span className="skill">
                          React
                      </span>                    
                      <span className="skill">
                          Sass
                      </span>     
                  </div>
                  <p>Моё порфолио, здесь вы сейчас и находитесь.</p>
              </div>
          </div>
      </div>
  </div>
  )
}

export default Works