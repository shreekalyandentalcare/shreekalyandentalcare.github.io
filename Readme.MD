# Jekyll Pages Site

This repository hosts a Jekyll Pages site. Follow the instructions below to set up and run the site locally.

## Prerequisites

Ensure you have the following installed on your system:

1. **Ruby**: Install Ruby using your operating system's package manager or download it from [ruby-lang.org](https://www.ruby-lang.org/en/).
2. **Bundler**: Bundler is a Ruby gem used to manage dependencies. Install it using the following command:
   ```bash
   gem install bundler
   ```

## Setup Instructions

### Step 1: Clone the Repository

Clone this repository to your local machine:
```bash
git clone <repository-url>
cd <repository-folder>
```

### Step 2: Install Dependencies

Install all required gems specified in the `Gemfile`:
```bash
bundle install
```

### Step 3: Update Dependencies (Optional)

To ensure all dependencies are up-to-date, run:
```bash
bundle update
```

### Step 4: Serve the Site Locally

Start the Jekyll development server with the following command:
```bash
bundle exec jekyll serve --host 0.0.0.0 --port 8000
```

This makes the site accessible at `http://0.0.0.0:8000`. You can also access it on your local network by replacing `0.0.0.0` with your system's IP address.

## Development Notes

- Modify content or configuration files as needed. The server will automatically reload changes.
- To stop the server, press `CTRL+C` in the terminal where the server is running.

## Troubleshooting

If you encounter issues:
- Ensure Ruby, Bundler, and Jekyll are correctly installed.
- Check that all dependencies are properly installed by running:
  ```bash
  bundle check
  ```
- Consult the [Jekyll documentation](https://jekyllrb.com/docs/) for additional help.

## License

This project is licensed under the FREE. See the `FREE` file for details.

---

Happy building! 🎉
