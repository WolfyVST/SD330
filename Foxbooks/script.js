// select the course dropdown menu
const courseDropdown = document.querySelector('#course-dropdown');

// add options to the course dropdown menu
for (let course in courses) {
  const option = document.createElement('option');
  option.value = course;
  option.text = course;
  courseDropdown.add(option);
}

document.addEventListener('DOMContentLoaded', function() {
  // Load the books data from JSON file
  fetch('data.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // Get the list of featured books
      const featuredBooks = document.getElementById('featured-books');
      const books = data.books;

      // Iterate through the books and add them to the featured books list
      for (const bookTitle in books) {
        if (books.hasOwnProperty(bookTitle)) {
          const book = books[bookTitle];
          const li = document.createElement('li');
          const img = document.createElement('img');
          const h3 = document.createElement('h3');
          const p = document.createElement('p');

          img.src = `images/${book.ISBN}.jpg`;
          img.alt = bookTitle;
          h3.textContent = bookTitle;
          p.textContent = book.Author;

          li.appendChild(img);
          li.appendChild(h3);
          li.appendChild(p);
          featuredBooks.appendChild(li);
        }
      }

      // Get the list of courses
      const courses = data.coursesTypes;
      const courseDropdown = document.getElementById('course-dropdown');

      // Iterate through the course types and add them to the courses list and the course dropdown menu
      for (const courseCode in courses) {
        if (courses.hasOwnProperty(courseCode)) {
          const course = courses[courseCode];
          const li = document.createElement('li');
          const h3 = document.createElement('h3');
          const p = document.createElement('p');
          const option = document.createElement('option');

          h3.textContent = `${courseCode} - ${course.ID}`;
          p.textContent = `Professor: ${course.Professor}, Semester: ${course.semester}`;
          option.value = courseCode;
          option.text = courseCode;

          li.appendChild(h3);
          li.appendChild(p);
          coursesList.appendChild(li);
          courseDropdown.add(option);
        }
      }
    })
    .catch(function(error) {
      console.log(`Error loading books data: ${error}`);
    });
});
