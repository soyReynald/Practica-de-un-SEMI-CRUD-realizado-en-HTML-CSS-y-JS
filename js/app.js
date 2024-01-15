// Parte generica de la aplicacion --- Todo este código ha sido escrito por Reynald ayudando
// A su hermano Francisco Alberto. Reynald es estudiante de Ingeniería.
// Pueden visitar su página en el siguiente enlace: https://cientificosdelsoftware.com
class UI {
    static displayBooks() {
        const storedBooks = [
            {
                title: "Los 12 secretos de la felicidad",
                author: "Mario Perez",
                codigo: "921444"
            },
            {
                title: "Los 7 hábitos de la gente altamente efectiva",
                author: "Stephen R. Covey",
                codigo: "921777"
            }
        ];
        const books = storedBooks;
        return books;
    }
    // Event to display all books
    showDefaultBooks (books, isNew) {
        if (isNew !== "newBook"){ 
            var oldBooks = UI.displayBooks();
    
            document.querySelector("#list_of_books tbody").innnerHTML = "";
            let list = document.querySelector("#list_of_books tbody");
            
            oldBooks.forEach((book, idx) => {
                var row = document.createElement("tr");
                row.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.codigo}</td>
                <td><a href="#" onclick="javascript:delete_button(this)" class="delete_button btn btn-danger btn-sm" id="book_${idx+1}">Delete</a></td>
                `;
                list.appendChild(row)
            })
            return oldBooks;
        }
    }
    
}

// Adding a new book
class Book extends UI {
    static addBookToList (book) {
        const list = document.querySelector("#list_of_books tbody");

        let row =  document.createElement("tr");
            row.innerHTML = `
                    <td>${book.title}</td>
                    <td>${book.autor}</td>
                    <td>${book.codigo}</td>
                    <td><a href="#" onclick="javascript:delete_button(this)" class="delete_button btn btn-danger btn-sm" id="book_${list.children.length+1}">Delete</a></td>
                </tr>
            `;
        list.appendChild(row);
    }
}

// Delete a book functionality
class Dynamics extends UI {
    static deleteFromBookList (e) {
        document.querySelector("table").deleteRow(parseInt(e.getAttribute("id").replace(/\D/g, '')
        ));
    }
}



// var newLibraryStart = new Book();
document.addEventListener('DOMContentLoaded', function (e) {
    e.preventDefault();
    let initilializationOfUi = new UI;
    initilializationOfUi.showDefaultBooks([], "notNew")
})

document.addEventListener('submit', function (e) {
    e.preventDefault();
    
    let title = document.querySelector("#titulo_de_libro").value;
    let autor = document.querySelector("#titulo_de_autor").value;
    let codigo = document.querySelector("#codigo").value;

    const book = {
        title: title,
        autor: autor,
        codigo: codigo
    }

    var bookToAdd = new Book()
    bookToAdd = Book.addBookToList(book, "newBook")
})

function delete_button (btn) {
        let toBeTarget = btn;
        Dynamics.deleteFromBookList(toBeTarget);
}