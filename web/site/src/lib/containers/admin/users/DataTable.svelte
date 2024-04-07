<script lang="ts">
  import {
    createTable,
    Render,
    Subscribe,
    createRender,
  } from "svelte-headless-table";
  import {
    addPagination,
    addSortBy,
    addTableFilter,
    addHiddenColumns,
    addSelectedRows,
  } from "svelte-headless-table/plugins";
  import { readable } from "svelte/store";
  import ArrowUpDown from "lucide-svelte/icons/arrow-up-down";
  import ChevronDown from "lucide-svelte/icons/chevron-down";
  import * as Table from "$lib/components/ui/table";
  import DataTableActions from "./DataTableAction.svelte";
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import DataTableCheckbox from "./DataTableCheckbox.svelte";
 
  type Payment = {
    id: string;
    age: number;
    status: "pending" | "processing" | "success" | "failed";
    email: string;
    name: string;
    firstname:string
  };
  const data: Payment[] = [
    {
      id: "m5gr84i9",
      status: "success",
      email: "ken99@yahoo.com",
      name: "Bob",
      firstname:"Jordan",
      age: 19,
    },
    // ...
  ];
 
  const table = createTable(readable(data), {
    page: addPagination(),
    sort: addSortBy({ disableMultiSort: true }),
    filter: addTableFilter({
      fn: ({ filterValue, value }) => value.includes(filterValue),
    }),
     hide: addHiddenColumns(),
    select: addSelectedRows(),
  });
 
  const columns = table.createColumns([
    table.column({
      accessor: "id",
      header: (_, { pluginStates }) => {
        const { allPageRowsSelected } = pluginStates.select;
        return createRender(DataTableCheckbox, {
          checked: allPageRowsSelected,
        });
      },
      cell: ({ row }, { pluginStates }) => {
        const { getRowState } = pluginStates.select;
        const { isSelected } = getRowState(row);
 
        return createRender(DataTableCheckbox, {
          checked: isSelected,
        });
      },
      plugins: {
        sort: {
          disable: true,
        },
        filter: {
          exclude: true,
        },
      },
    }),
    table.column({
      accessor: "status",
      header: "Name",
      plugins: {
        sort: {
          disable: true,
        },
        filter: {
          exclude: true,
        },
      },
    }),
    table.column({
      accessor: "firstname",
      header: "Firstname",
    }),
    table.column({
      accessor: "email",
      header: "Email",
    }),
    table.column({
      accessor: "age",
      header: "Age",
    }),
    table.column({
      accessor: ({ id }) => id,
      header: "",
      cell: ({ value }) => {
        return createRender(DataTableActions, { id: value });
      },
      plugins: {
        sort: {
          disable: true,
        },
      },
    }),
  ]);
 
  const {
    headerRows,
    tableAttrs,
    tableBodyAttrs,
    pluginStates,
    flatColumns,
  } = table.createViewModel(columns);
 

  const { filterValue } = pluginStates.filter;
  const { hiddenColumnIds } = pluginStates.hide;
 
  const ids = flatColumns.map((col) => col.id);
  let hideForId = Object.fromEntries(ids.map((id) => [id, true]));
 
  $: $hiddenColumnIds = Object.entries(hideForId)
    .filter(([, hide]) => !hide)
    .map(([id]) => id);
 
  const hidableCols = ["status","firstname", "email", "age"];
</script>


   <div>
<div class="flex items-center py-4">
  <Input
    class="max-w-sm"
    placeholder="Filter emails..."
    type="text"
    bind:value={$filterValue}
  />
  <DropdownMenu.Root>
    <DropdownMenu.Trigger asChild let:builder>
      <Button variant="outline" class="ml-auto" builders={[builder]}>
        Columns <ChevronDown class="ml-2 h-4 w-4" />
      </Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content>
      {#each flatColumns as col}
        {#if hidableCols.includes(col.id)}
          <DropdownMenu.CheckboxItem bind:checked={hideForId[col.id]}>
            {col.header}
          </DropdownMenu.CheckboxItem>
        {/if}
      {/each}
    </DropdownMenu.Content>
  </DropdownMenu.Root>
</div>
  <div class="rounded-md border">
    <Table.Root {...$tableAttrs}>
      <Table.Header>
        {#each $headerRows as headerRow}
          <Subscribe rowAttrs={headerRow.attrs()}>
            <Table.Row>
              {#each headerRow.cells as cell (cell.id)}
                <Subscribe
                  attrs={cell.attrs()}
                  let:attrs
                  props={cell.props()}
                  let:props
                >
                  <Table.Head {...attrs}>
                    {#if cell.id === "amount"}
                      <div class="text-right">
                        <Render of={cell.render()} />
                      </div>
                    {:else if cell.id === "email"}
                      <Button variant="ghost" on:click={props.sort.toggle}>
                        <Render of={cell.render()} />
                        <ArrowUpDown class={"ml-2 h-4 w-4"} />
                      </Button>
                    {:else}
                      <Render of={cell.render()} />
                    {/if}
                  </Table.Head>
                </Subscribe>
              {/each}
            </Table.Row>
          </Subscribe>
        {/each}
      </Table.Header>
      <Table.Body {...$tableBodyAttrs}>
        <!-- ... -->
      </Table.Body>
    </Table.Root>
  </div>

  </div>
