<template>
    <table>
        <caption>{{tableTitle}}</caption>
        <thead>
            <tr>
                <th
                    v-for="(value, index) in tableHead"
                    v-bind:key="index"
                >{{value}}</th>
            </tr>
        </thead>
        <tbody>
            <tr
              v-for="(value, index) in tableBody"
              v-bind:key="index"
            >
                <td>{{index+1}}</td>
                <td v-for="(value1, index1) in value" v-bind:key="index1">{{value1}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "tablePiece",
    props: [
        "tableTitle",
        "tableHead",
        "tableBody"
    ]
}
</script>