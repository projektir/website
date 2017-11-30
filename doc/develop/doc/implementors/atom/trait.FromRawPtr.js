(function() {var implementors = {};
implementors["amethyst"] = ["impl FromRawPtr for Pulse","impl FromRawPtr for Signal",];
implementors["amethyst_assets"] = ["impl FromRawPtr for Pulse","impl FromRawPtr for Signal",];
implementors["amethyst_renderer"] = ["impl FromRawPtr for Pulse","impl FromRawPtr for Signal",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
