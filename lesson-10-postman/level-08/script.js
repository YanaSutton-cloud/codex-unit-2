// TODO: Starter for Level 08: implement submit handler.

const form = document.getElementById("api-form");
const submitBtn = document.getElementById("submitBtn");
const resultOutput = document.getElementById("result");

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  submitBtn.disabled = true;
  submitBtn.textContent = "Submitting...";
  resultOutput.style.display = "none";

  try {
    const response = await fetch("https://reqbin.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      resultOutput.textContent = `Thank you, ${result.name}! Your message has been sent successfully. We will contact you at ${result.email}.`;
      resultOutput.className = "success";
      form.reset();
    } else {
      throw new Error("Network response was not ok.");
    }
  } catch (error) {
    resultOutput.textContent = "Oops! Something went wrong. Please try again.";
    resultOutput.className = "error";
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Submit Data";
    resultOutput.style.display = "block";
  }
});
