# Local Overrides for our AS Repo

## Host Specific Entries

    AppConfig[:db_url] = "jdbc:mysql:..."
    
    # Instance URL's
    AppConfig[:frontend_proxy_url] = "https://staff.findingaids.library.georgetown.edu"
    AppConfig[:public_proxy_url] = "http://findingaids.library.georgetown.edu"
    
## General Oveerrides

    # General Settings
    AppConfig[:backend_log_level] = "info"
    AppConfig[:indexer_records_per_thread] = 50
    
    # Search Customizations
    AppConfig[:pui_search_results_page_size] = 20
    
    # Control Top Level Navigation Options
    AppConfig[:pui_hide][:digital_objects] = true
    AppConfig[:pui_hide][:accessions] = true
    AppConfig[:pui_hide][:classifications] = true
    