export default function ContactForm() {
    return (
        <form name="contact" action="/success" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
      <p>
<input type="text" name="firstname" id="firstname" />
          <label htmlFor="yourname">
            Your Name:
          </label> <br />
          <input type="text" class="rounded text-pink-500" name="name" id="yourname" />
        </p>
        <p>
          <label htmlFor="youremail">
            Your Email:
          </label> <br />
          <input type="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" id="youremail" />
        </p>
        <p>
          <label htmlFor="yourmessage">
            Message:
          </label> <br />
          <textarea name="message" class="rounded text-pink-500" id="yourmessage"></textarea>
        </p>
        <p>
          <button class="rounded text-pink-500" type="submit">Send</button>
        </p>
      </form>
    )
  }