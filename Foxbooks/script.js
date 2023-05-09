document.addEventListener('DOMContentLoaded', function() {
  // Load the books data from JSON file
  fetch('data.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // Get the list of featured books
      const featuredBooks = document.getElementById('books-list');
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
      const courses = document.getElementById('courses-list');
      const courseTypes = data.coursesTypes;

      // Iterate through the course types and add them to the courses list
      for (const courseCode in courseTypes) {
        if (courseTypes.hasOwnProperty(courseCode)) {
          const course = courseTypes[courseCode];
          const li = document.createElement('li');
          const h3 = document.createElement('h3');
          const p = document.createElement('p');

          h3.textContent = `${courseCode} - ${course.ID}`;
          p.textContent = `Professor: ${course.Professor}, Semester: ${course.semester}`;

          li.appendChild(h3);
          li.appendChild(p);
          courses.appendChild(li);
        }
      }
    })
    .catch(function(error) {
      console.log(`Error loading data: ${error}`);
    });
});
